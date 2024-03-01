import { Injectable, BadRequestException, UnauthorizedException, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { hash, verify } from 'argon2';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { AuthDto } from './dto/auth.dto';


@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService, private jwt: JwtService) {}

    async login(dto: AuthDto) {
        const user = await this.validateUser(dto)
        const tokens = await this.issueTokens(user.id)

        return {
            user: this.returnUserFields(user), ...tokens
        }
    }

    async getNewTokens(refreshToken: string) {
        console.log(refreshToken);
        
        const result = await this.jwt.verifyAsync(refreshToken)
        console.log(result);
        
        if(!result) throw new UnauthorizedException("Invalid refresh token")

        const user = await this.prisma.user.findUnique({where: {id: result.id}})

        const tokens = await this.issueTokens(user.id)
        
        return {user: this.returnUserFields(user), ...tokens}
    }

    async register(dto: AuthDto) {
        const oldUser = await this.prisma.user.findUnique({
            where: {
                email: dto.email
            }
        })
        if(oldUser) throw new BadRequestException("User already exists")
        const user = await this.prisma.user.create({
            data: {
                fullName: dto.fullName,
                email: dto.email,
                phone: dto.phone,
                driverLicense: dto.driverLicense,
                avatarPath: dto.avatarPath,
                password: await hash(dto.password)
            }
        })

        const tokens = await this.issueTokens(user.id)
        return {
            user: this.returnUserFields(user), ...tokens
        }
    }

    private async issueTokens(userId: number) {
        const data = {id: userId}
        const accessToken = this.jwt.sign(data, {
            expiresIn: '1h'
        })

        const refreshToken = this.jwt.sign(data, {
            expiresIn: '7d'
        })

        return { accessToken, refreshToken }
    }

    private returnUserFields(user: User) {
        return {
            id: user.id,
            email: user.email
        }
    }

    private async validateUser(dto: AuthDto) {
        const user = await this.prisma.user.findUnique({
            where: {
                email: dto.email
            }
        })
        if(!user) throw new NotFoundException("User not found")

        const isValid = await verify(user.password, dto.password)
        console.log(isValid);
        

        if(!isValid) throw new UnauthorizedException("Invalid password")

        return user
    }
}

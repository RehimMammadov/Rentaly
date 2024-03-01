import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { returnLogoObject } from './return-logo.object';
import { LogoDto } from './dto/logo.dto';

@Injectable()
export class LogoService {
    constructor(private prisma: PrismaService) {}

    async byId(id: number) {
        const logo = await this.prisma.rentalyLogo.findUnique({
            where: { id },
            select: returnLogoObject
        })

        if(!logo) {
            throw new Error("Logo not found")
        }
    }

    async getAll() {
        return this.prisma.rentalyLogo.findMany({
            select: returnLogoObject
        })
    }

    async create(dto: LogoDto) {
        try {      
          await this.prisma.rentalyLogo.create({
            data: {
              image: dto.image
            },
          });
        } catch (error) { 
            throw new BadRequestException('Invalid file type. Please upload a valid image.');
        }
    }

    async update(id: number, dto: LogoDto) {
        return this.prisma.rentalyLogo.update({ 
            where: { id },
            data: {
                image: dto.image
            }
        })
    }

    async delete(id: number) {
        return this.prisma.rentalyLogo.delete({
            where: { id }
        })
    }
}

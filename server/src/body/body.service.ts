import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { returnBodyObject } from './return-body.object';
import { BodyDto } from './dto/body.dto';

@Injectable()
export class BodyService {
    constructor(private prisma: PrismaService) {}

    async byId(id: number) {
        const body = await this.prisma.carBody.findUnique({
            where: { id },
            select: returnBodyObject
        })

        if(!body) {
            throw new Error("Body not found")
        }

        return body
    }

    async getAll() {
        return this.prisma.carBody.findMany({
            select: returnBodyObject
        })
    }

    async create(dto: BodyDto) {
        try {
            await this.prisma.carBody.create({
                data: {
                    title: dto.title,
                    image: dto.image
                }
            })
        } catch (error) {
            if (error.message && error.message.includes('Invalid file type')) {

                throw new BadRequestException('Invalid file type. Please upload a valid image.');
              } else {
                
                throw new BadRequestException('Error during file upload or database operation.');
            }
        }
    }

    async update(id: number, dto: BodyDto) {
        return this.prisma.carBody.update({
            where: {id},
            data: {
                title: dto.title,
                image: dto.image
            }
        })
    }

    async delete(id: number) {
        return this.prisma.carBody.delete({
            where: { id }
        })
    }
}

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { returnChooseObject } from './return-choose.object';
import { ChooseDto } from './dto/choose.dto';

@Injectable()
export class ChooseService {
    constructor(private prisma: PrismaService) {}

    async byId(id: number) {
        const choose = await this.prisma.rentalyChooseContent.findUnique({
            where: { id },
            select: returnChooseObject
        })

        if(!choose) {
            throw new Error("Choose not found")
        }

        return choose
    }

    async getAll() {
        return await this.prisma.rentalyChooseContent.findMany({
            select: returnChooseObject
        })
    }

    async create(dto: ChooseDto) {
        return await this.prisma.rentalyChooseContent.create({
            data: {
                title: dto.title,
                content: dto.content,
                image: dto.image
            }
        })
    }

    async update(id: number, dto: ChooseDto) {
        return await this.prisma.rentalyChooseContent.update({
            where: { id },
            data: {
                title: dto.title,
                content: dto.content,
                image: dto.image
            }
        })
    }

    async delete(id: number) {
        return await this.prisma.rentalyChooseContent.delete({
            where: { id }
        })
    }
}

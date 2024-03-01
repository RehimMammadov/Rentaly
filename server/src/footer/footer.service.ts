import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { returnFooterObject } from './return-footer.object';
import { FooterDto } from './dto/footer.dto';

@Injectable()
export class FooterService {
    constructor(private prisma: PrismaService) {}

    async byId(id: number) {
        const footer = await this.prisma.rentalyFooterContent.findUnique({
            where: { id },
            select: returnFooterObject
        })

        if(!footer) {
            throw new Error("Footer not found!")
        }

        return footer
    }

    async getAll() {
        return await this.prisma.rentalyFooterContent.findMany({
            select: returnFooterObject
        })
    }

    async create(dto: FooterDto) {
        await this.prisma.rentalyFooterContent.create({
            data: {
                title: dto.title
            }
        })
    }

    async update(id: number, dto: FooterDto) {
        await this.prisma.rentalyFooterContent.update({
            where: { id },
            data: {
                title: dto.title
            }
        })
    }

    async delete(id: number) {
        await this.prisma.rentalyFooterContent.delete({
            where: { id }
        })
    }
}

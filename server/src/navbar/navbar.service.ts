import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { returnNavbarObject } from './return-navbar.object';
import { NavbarDto } from './dto/navbar.dto';

@Injectable()
export class NavbarService {
    constructor(private prisma: PrismaService) {}

    async byId(id: number) {
        const navbar = await this.prisma.rentalyNavbarContent.findUnique({
            where: {id},
            select: returnNavbarObject
        })

        if(!navbar) {
            throw new Error("Navbar not found")
        }

        return navbar
    }

    async getAll() {
        return this.prisma.rentalyNavbarContent.findMany({
            select: returnNavbarObject
        })
    }

    async create(dto: NavbarDto) {
        await this.prisma.rentalyNavbarContent.create({
            data: {
                title: dto.title,
                link: dto.link
            }
        })
    }

    async update(id: number, dto: NavbarDto) {
        return this.prisma.rentalyNavbarContent.update({
            where: { id },
            data: {
                title: dto.title,
                link: dto.link
            }
        })
    }

    async delete(id: number) {
        return this.prisma.rentalyNavbarContent.delete({
            where: { id }
        })
    }
}

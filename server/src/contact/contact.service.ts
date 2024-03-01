import { Injectable } from '@nestjs/common';
import { returnContactObject } from './return-contact.object';
import { PrismaService } from 'src/prisma.service';
import { ContactDto } from './dto/contact.dto';

@Injectable()
export class ContactService {
    constructor(private prisma: PrismaService) {}

    async byId(id: number) {
        const contact = await this.prisma.contact.findUnique({
            where: { id },
            select: returnContactObject
        })

        if(!contact) {
            throw new Error("Contact not found")
        }

        return contact
    }

    async getAll() {
        return this.prisma.contact.findMany({
            select: returnContactObject
        })
    }

    async create(dto: ContactDto) {
        return this.prisma.contact.create({
            data: {
                fullName: dto.fullName,
                email: dto.email,
                phone: dto.phone,
                subject: dto.subject,
                message: dto.message
            }
        })
    }

    async update(id: number, dto: ContactDto) {
        return this.prisma.contact.update({ 
            where: { id },
            data: {
                fullName: dto.fullName,
                email: dto.email,
                phone: dto.phone,
                subject: dto.subject,
                message: dto.message
            }
        })
    }

    async delete(id: number) {
        return this.prisma.contact.delete({
            where: { id }
        })
    }
}

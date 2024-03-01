import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { returnCategoryObject } from './return-category.object';
import { CategoryDto } from './dto/category.dto';


@Injectable()
export class CategoryService {
    constructor(private prisma: PrismaService) {}

    async byId(id: number) {
        const category = await this.prisma.category.findUnique({
            where: { id },
            select: returnCategoryObject
        })

        if(!category) {
            throw new Error("Category not found")
        }

        return category
    }

    async getAll() {
        return this.prisma.category.findMany({
            select: returnCategoryObject
        })
    }

    async create(dto: CategoryDto) {
        return this.prisma.category.create({
            data: {
                title: dto.title
            }
        })
    }

    async update(id: number, dto: CategoryDto) {
        return this.prisma.category.update({ 
            where: { id },
            data: {
                title: dto.title
            }
        })
    }

    async delete(id: number) {
        return this.prisma.category.delete({
            where: { id }
        })
    }
}


import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { BrandDto } from './dto/brand.dto';
import { returnBrandObject } from './return-brand.object';

@Injectable()
export class BrandService {
    constructor(private prisma: PrismaService) {}

    async byId(id: number) {
        const brand = await this.prisma.carBrand.findUnique({
            where: { id },
            select: returnBrandObject
        })

        if(!brand) {
            throw new Error("Brand not found")
        }

        return brand
    }

    async getAll() {
        return this.prisma.carBrand.findMany({
            select: returnBrandObject
        })
    }

    async create( dto: BrandDto) {
      try {   
        await this.prisma.carBrand.create({
          data: {
            title: dto.title,
            logo: dto.logo,
          },
        });
      } catch (error) {
          throw new BadRequestException('Invalid file type. Please upload a valid image.');
      }
    }
    

    async update(id: number, dto: BrandDto) {
        return this.prisma.carBrand.update({ 
            where: { id },
            data: {
                title: dto.title,
                logo: dto.logo,
            }
        })
    }

    async delete(id: number) {
        return this.prisma.carBrand.delete({
            where: { id }
        })
    }
}

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { returnCarObject } from './return-car.object';
import { CarDto } from './dto/car.dto';

@Injectable()
export class CarService {
    constructor(private prisma: PrismaService) {}

    async byId(id: number) {
        const car = await this.prisma.carModel.findUnique({
            where: { id },
            select: returnCarObject
        })

        if(!car) {
            throw new Error("Car not found")
        }

        return car
    }

    async getAll() {
        return await this.prisma.carModel.findMany({
            select: returnCarObject
        })
    }

    async create(dto: CarDto) {
        return this.prisma.carModel.create({
            data: {
                title: dto.title,
                engine: dto.engine,
                transmision: dto.transmision,
                supercharger: dto.supercharger,
                power: dto.power,
                torque: dto.torque,
                maxSpeed: dto.maxSpeed,
                acceleration: dto.acceleration,
                fuel: dto.fuel,
                condition: dto.condition,
                color: dto.color,
                colorImage: dto.colorImage,
                imageUrls: dto.imageUrls,
                price: dto.price,
                description: dto.description,
                dailyRentPrice: dto.dailyRentPrice,
                weeklyRentPrice: dto.weeklyRentPrice,
                monthlyRentPrice: dto.monthlyRentPrice,
                isAvailable: dto.isAvailable,
                brandId: dto.brandId,
                bodyId: dto.bodyId
            }   
        })
    }

    async update(id: number, dto: CarDto) {
        return this.prisma.carModel.update({ 
            where: { id },
            data: {
                title: dto.title,
                engine: dto.engine,
                transmision: dto.transmision,
                supercharger: dto.supercharger,
                power: dto.power,
                torque: dto.torque,
                maxSpeed: dto.maxSpeed,
                acceleration: dto.acceleration,
                fuel: dto.fuel,
                condition: dto.condition,
                color: dto.color,
                colorImage: dto.colorImage,
                imageUrls: dto.imageUrls,
                price: dto.price,
                description: dto.description,
                dailyRentPrice: dto.dailyRentPrice,
                weeklyRentPrice: dto.weeklyRentPrice,
                monthlyRentPrice: dto.monthlyRentPrice,
                isAvailable: dto.isAvailable,
                brandId: dto.brandId,
                bodyId: dto.bodyId
            }
        })
    }

    async delete(id: number) {
        return this.prisma.carModel.delete({
            where: { id }
        })
    }
}

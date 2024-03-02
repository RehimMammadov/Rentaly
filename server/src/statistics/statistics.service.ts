import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { returnStatisticObject } from './return-statistics.object';
import { StatisticsDto } from './dto/statistics.dto';

@Injectable()
export class StatisticsService {
    constructor(private prisma: PrismaService) {}

    async byId(id: number) {
        const statistic = await this.prisma.statistics.findUnique({
            where: { id },
            select: returnStatisticObject
        })

        if(!statistic) {
            throw new Error('Statistic not found')
        }

        return statistic
    }

    async getAll() {
        return await this.prisma.statistics.findMany({
            select: returnStatisticObject
        })
    }

    async create(dto: StatisticsDto) {
        return await this.prisma.statistics.create({
            data: {
                quantity: dto.quantity,
                title: dto.title,
                info: dto.info
            }
        })
    }

    async update(id: number, dto: StatisticsDto) {
        await this.prisma.statistics.update({
            where: { id },
            data: {
                quantity: dto.quantity,
                title: dto.title,
                info: dto.info
            }
        })
    }

    async delete(id: number) {
        return await this.prisma.statistics.delete({
            where: { id }
        })
    }
}

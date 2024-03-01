import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { returnReviewObject } from './return-review.object';
import { ReviewDto } from './dto/review.dto';

@Injectable()
export class ReviewService {
    constructor(private prisma: PrismaService) {}

    async byId(id: number) {
        const review = await this.prisma.review.findUnique({
            where: { id },
            select: returnReviewObject
        })

        if(!review) {
            throw new Error("Review not found")
        }

        return review
    }

    async getAll() {
        return this.prisma.review.findMany({
            select: returnReviewObject
        })
    }

    async create(dto: ReviewDto) {
        return this.prisma.review.create({
            data: {
                rating: dto.rating,
                text: dto.text,
                userId: dto.userId,
                modelId: dto.modelId,
                partId: dto.partId
            }
        })
    }

    async update(id: number, dto: ReviewDto) {
        return this.prisma.review.update({
            where: { id },
            data: {
                rating: dto.rating,
                text: dto.text,
                userId: dto.userId,
                modelId: dto.modelId,
                partId: dto.partId
            }
        })
    }

    async delete(id: number) {
        return this.prisma.review.delete({
            where: { id }
        })
    }
}

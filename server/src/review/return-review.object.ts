import { Prisma } from "@prisma/client";

export const returnReviewObject: Prisma.ReviewSelect = {
    id: true,
    rating: true,
    text: true,
    user: true,
    model: true,
    part: true
}
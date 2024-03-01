import { Prisma } from "@prisma/client";

export const returnBodyObject: Prisma.CarBodySelect = {
    id: true,
    title: true,
    image: true
}
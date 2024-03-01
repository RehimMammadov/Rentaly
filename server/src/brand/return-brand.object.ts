import { Prisma } from "@prisma/client";

export const returnBrandObject: Prisma.CarBrandSelect = {
    id: true,
    title: true,
    logo: true
}
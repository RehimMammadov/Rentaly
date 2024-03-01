import { Prisma } from "@prisma/client";

export const returnChooseObject: Prisma.RentalyChooseContentSelect = {
    id: true,
    title: true,
    content: true,
    image: true
}
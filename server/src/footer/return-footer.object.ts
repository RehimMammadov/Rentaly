import { Prisma } from "@prisma/client";

export const returnFooterObject: Prisma.RentalyFooterContentSelect = {
    id: true,
    title: true
}
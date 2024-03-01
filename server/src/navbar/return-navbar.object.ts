import { Prisma } from "@prisma/client";

export const returnNavbarObject: Prisma.RentalyNavbarContentSelect = {
    id: true,
    title: true,
    link: true
}
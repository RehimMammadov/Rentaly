import { Prisma } from "@prisma/client";

export const returnLogoObject: Prisma.RentalyLogoSelect = {
    id: true,
    image: true
}
import { Prisma } from "@prisma/client";

export const returnStatisticObject: Prisma.StatisticsSelect = {
    id: true,
    quantity: true,
    title: true,
    info: true
}
import { Prisma } from "@prisma/client";

export const returnContactObject: Prisma.ContactSelect = {
    id: true,
    fullName: true,
    email: true,
    phone: true,
    subject: true,
    message: true
}
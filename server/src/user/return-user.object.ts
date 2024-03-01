import { Prisma } from "@prisma/client";

export const returnUserObject: Prisma.UserSelect = {
    id: true, 
    fullName: true,
    email: true,
    avatarPath: true,
    phone: true,
    password: false,
    driverLicense: true,
}
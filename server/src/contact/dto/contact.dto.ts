import { IsEmail, IsPhoneNumber, IsString } from "class-validator";

export class ContactDto {
    @IsString()
    fullName: string

    @IsEmail()
    email: string

    @IsPhoneNumber()
    phone: string

    @IsString()
    subject: string

    @IsString()
    message: string
}   
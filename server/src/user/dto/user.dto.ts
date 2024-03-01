import { IsEmail, IsOptional, IsString } from "class-validator";

export class UserDto {
    @IsEmail()
    email: string

    @IsString()
    @IsOptional()
    password?: string

    @IsOptional()
    @IsString()
    fullName: string;

    @IsOptional()
    @IsString()
    avatarPath: string

    @IsOptional()
    @IsString()
    phone?: string

    @IsOptional()
    @IsString()
    driverLicense?: string

}
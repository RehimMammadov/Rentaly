import { IsEmail, MinLength, IsString, isString, IsOptional } from "class-validator";

export class AuthDto {
    @IsOptional()
    @IsString()
    fullName: string

    @IsEmail()
    email: string

    @IsOptional()
    @IsString()
    phone: string

    @IsOptional()
    @IsString()
    driverLicense: string

    @IsOptional()
    @IsString()
    avatarPath: string

    @MinLength(8, {
        message: 'Password must be at least 8 characters'
    })
    @IsString()
    password: string
}
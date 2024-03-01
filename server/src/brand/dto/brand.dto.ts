import { IsString } from "class-validator";

export class BrandDto {
    @IsString()
    title: string

    @IsString()
    logo: string
}
import { IsString } from "class-validator";

export class NavbarDto {
    @IsString()
    title: string

    @IsString()
    link: string
}
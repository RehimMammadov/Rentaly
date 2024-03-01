import { IsString } from "class-validator";

export class FooterDto {
    @IsString()
    title: string
}
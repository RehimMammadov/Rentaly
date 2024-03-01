import { IsString } from "class-validator";

export class BodyDto {
    @IsString()
    title: string

    @IsString()
    image: string
}
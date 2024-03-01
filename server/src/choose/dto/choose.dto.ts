import { IsString } from "class-validator";

export class ChooseDto {
    @IsString()
    title: string

    @IsString()
    content: string

    @IsString()
    image: string
}
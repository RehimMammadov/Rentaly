import { IsString } from "class-validator";

export class LogoDto {
    @IsString()
    image: string
}
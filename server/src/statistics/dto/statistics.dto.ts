import { IsNumber, IsString } from "class-validator";

export class StatisticsDto {
    @IsNumber()
    quantity: number

    @IsString()
    title: string

    @IsString()
    info: string
}
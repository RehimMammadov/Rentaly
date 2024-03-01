import { IsNumber, IsString } from "class-validator";

export class ReviewDto {
    @IsNumber()
    rating: number

    @IsString()
    text: string

    @IsNumber()
    userId: number

    @IsNumber()
    modelId: number

    @IsNumber()
    partId: number
}
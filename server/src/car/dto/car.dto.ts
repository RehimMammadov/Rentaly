import { IsArray, IsBoolean, IsBooleanString, IsNumber, IsString, isNumber, isString } from "class-validator";

export class CarDto {
    @IsString()
    title: string

    @IsNumber()
    engine: number

    @IsString()
    transmision: string

    @IsString()
    supercharger: string

    @IsNumber()
    power: number

    @IsNumber()
    torque: number

    @IsNumber()
    maxSpeed: number

    @IsNumber()
    acceleration: number

    @IsString()
    fuel: string

    @IsString()
    condition: string

    @IsString()
    color: string

    @IsString()
    colorImage: string

    @IsString()
    imageUrls: string

    @IsString()
    price: number

    @IsString()
    description: string

    @IsNumber()
    dailyRentPrice: number
    
    @IsNumber()
    weeklyRentPrice: number

    @IsNumber()
    monthlyRentPrice: number
    
    @IsBooleanString()
    isAvailable: boolean

    @IsNumber()
    brandId: number

    @IsNumber()
    bodyId: number

    @IsArray()
    parts: any[]

    @IsArray()
    orderItems: any[]

    @IsArray()
    reviews: any[]
}
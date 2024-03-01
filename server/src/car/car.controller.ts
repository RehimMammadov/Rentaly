import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarService } from './car.service';
import { CarDto } from './dto/car.dto';
import { Auth } from 'src/auth/decorators/auth.decorator';

@Controller('car')
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Get()
  async getAll() {
    return this.carService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.carService.byId(+id);
  }

  @HttpCode(200)
  @Auth()
  @Post('')
  async create(@Body() dto: CarDto) {
    return this.carService.create(dto)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Auth()
  @Put(':id')
  async update(@Param('id') id: string, @Body() dto: CarDto) {
    return this.carService.update(+id, dto)
  }

  @HttpCode(200)
  @Auth()
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.carService.delete(+id)
  }
}

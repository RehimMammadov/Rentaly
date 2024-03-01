import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UsePipes, ValidationPipe, UploadedFile, UseInterceptors } from '@nestjs/common';
import { BrandService } from './brand.service';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { BrandDto } from './dto/brand.dto';

@Controller('brand')
export class BrandController {
  constructor(private readonly brandService: BrandService) {}

  @Get()
  async getAll() {
    return this.brandService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.brandService.byId(+id);
  }

  @HttpCode(200)
  @Auth()
  @Post('')
  async create(@Body() dto: BrandDto) {
    return this.brandService.create(dto);
  }
  

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Auth()
  @Put(':id')
  async update(@Param('id') id: string, @Body() dto: BrandDto) {
    return this.brandService.update(+id, dto)
  }

  @HttpCode(200)
  @Auth()
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.brandService.delete(+id)
  }
}

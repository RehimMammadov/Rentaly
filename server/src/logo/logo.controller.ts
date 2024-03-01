import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UsePipes, ValidationPipe, UploadedFile, UseInterceptors } from '@nestjs/common';
import { LogoService } from './logo.service';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { LogoDto } from './dto/logo.dto';

@Controller('logo')
export class LogoController {
  constructor(private readonly logoService: LogoService) {}

  @Get()
  async getAll() {
    return this.logoService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.logoService.byId(+id);
  }

  @HttpCode(200)
  @Auth()
  @Post('')
  async create(@Body() dto: LogoDto) {
    return this.logoService.create(dto);
  }
  


  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Auth()
  @Put(':id')
  async update(@Param('id') id: string, dto: LogoDto) {
    return this.logoService.update(+id, dto)
  }

  @HttpCode(200)
  @Auth()
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.logoService.delete(+id)
  }
}

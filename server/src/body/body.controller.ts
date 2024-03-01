import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UsePipes, ValidationPipe, UploadedFile, UseInterceptors } from '@nestjs/common';
import { BodyService } from './body.service';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { BodyDto } from './dto/body.dto';

@Controller('body')
export class BodyController {
  constructor(private readonly bodyService: BodyService) {}

  @Get()
  async getAll() {
    return this.bodyService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.bodyService.byId(+id);
  }

  @HttpCode(200)
  @Auth()
  @Post('')
  async create(@Body() dto: BodyDto) {
    return this.bodyService.create(dto);
  }
  


  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Auth()
  @Put(':id')
  async update(@Param('id') id: string, @Body() dto: BodyDto) {
    return this.bodyService.update(+id, dto)
  }

  @HttpCode(200)
  @Auth()
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.bodyService.delete(+id)
  }
}

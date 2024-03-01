import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ChooseService } from './choose.service';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { ChooseDto } from './dto/choose.dto';

@Controller('choose')
export class ChooseController {
  constructor(private readonly chooseService: ChooseService) {}

  @Get()
  async getAll() {
    return this.chooseService.getAll()
  }

  @Get(":id")
  async getById(@Param('id') id: string) {
    return this.chooseService.byId(+id)
  }


  @HttpCode(200)
  @Auth()
  @Post()
  async create(@Body() dto: ChooseDto) {
    return this.chooseService.create(dto)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Auth()
  @Put(':id')
  async update(@Param('id') id: string, @Body() dto: ChooseDto) {
    return this.chooseService.update(+id, dto)
  }

  @HttpCode(200)
  @Auth()
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.chooseService.delete(+id)
  }
}

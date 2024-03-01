import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { NavbarService } from './navbar.service';
import { NavbarDto } from './dto/navbar.dto';
import { Auth } from 'src/auth/decorators/auth.decorator';

@Controller('navbar')
export class NavbarController {
  constructor(private readonly navbarService: NavbarService) {}

  @Get()
  async getAll() {
    return this.navbarService.getAll()
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.navbarService.byId(+id)
  }

  @HttpCode(200)
  @Auth()
  @Post()
  async create(@Body() dto: NavbarDto) {
    return this.navbarService.create(dto)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Auth()
  @Put(':id')
  async update(@Param('id') id: string, @Body() dto: NavbarDto) {
    return this.navbarService.update(+id, dto)
  }

  @HttpCode(200)
  @Auth()
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.navbarService.delete(+id)
  }
}

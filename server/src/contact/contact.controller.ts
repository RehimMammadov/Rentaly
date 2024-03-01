import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ContactService } from './contact.service';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { ContactDto } from './dto/contact.dto';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Get()
  async getAll() {
    return this.contactService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.contactService.byId(+id);
  }

  @HttpCode(200)
  @Auth()
  @Post('')
  async create(@Body() dto: ContactDto) {
    return this.contactService.create(dto)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Auth()
  @Put(':id')
  async update(@Param('id') id: string, @Body() dto: ContactDto) {
    return this.contactService.update(+id, dto)
  }

  @HttpCode(200)
  @Auth()
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.contactService.delete(+id)
  }
}

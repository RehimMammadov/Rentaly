import { Body, Controller, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { FooterService } from './footer.service';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { FooterDto } from './dto/footer.dto';

@Controller('footer')
export class FooterController {
  constructor(private readonly footerService: FooterService) {}

  @Get()
  async getAll() {
    return this.footerService.getAll()
  }

  @Get(":id")
  async getById(id: string) {
    return this.footerService.byId(+id)
  }

  @HttpCode(200)
  @Auth()
  @Post('')
  async create(@Body() dto: FooterDto) {
    return this.footerService.create(dto)
  }

  @HttpCode(200)
  @Auth()
  @Put(':id')
  async update(@Param() id: string, dto: FooterDto) {
    return this.footerService.update(+id, dto)
  }

  @HttpCode(200)
  @Auth()
  @Put(':id')
  async delete(@Param() id: string) {
    return this.footerService.delete(+id)
  }
}

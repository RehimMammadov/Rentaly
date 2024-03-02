import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { StatisticsService } from './statistics.service';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { StatisticsDto } from './dto/statistics.dto';

@Controller('statistics')
export class StatisticsController {
  constructor(private readonly statisticsService: StatisticsService) {}

  @Get()
  async getAll() {
    return this.statisticsService.getAll()
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.statisticsService.byId(+id)
  }

  @HttpCode(200)
  @Auth()
  @Post()
  async create(@Body() dto: StatisticsDto) {
    return this.statisticsService.create(dto)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Auth()
  @Put(':id')
  async update(@Param('id') id: string, @Body() dto: StatisticsDto) {
    return this.statisticsService.update(+id, dto)
  }

  @HttpCode(200)
  @Auth()
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.statisticsService.delete(+id)
  }
}

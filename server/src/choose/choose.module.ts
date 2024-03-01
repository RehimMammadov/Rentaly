import { Module } from '@nestjs/common';
import { ChooseService } from './choose.service';
import { ChooseController } from './choose.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ChooseController],
  providers: [ChooseService, PrismaService]
})
export class ChooseModule {}

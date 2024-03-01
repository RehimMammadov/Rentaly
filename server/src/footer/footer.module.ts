import { Module } from '@nestjs/common';
import { FooterService } from './footer.service';
import { FooterController } from './footer.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [FooterController],
  providers: [FooterService, PrismaService]
})
export class FooterModule {}

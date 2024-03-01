import { Module } from '@nestjs/common';
import { NavbarService } from './navbar.service';
import { NavbarController } from './navbar.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [NavbarController],
  providers: [NavbarService, PrismaService]
})
export class NavbarModule {}

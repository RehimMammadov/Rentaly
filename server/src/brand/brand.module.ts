import { Module } from '@nestjs/common';
import { BrandService } from './brand.service';
import { BrandController } from './brand.controller';
import { CloudinaryModule } from 'src/cloudinary/cloudinary.module';
import { PrismaService } from 'src/prisma.service';

@Module({
  imports: [CloudinaryModule],
  controllers: [BrandController],
  providers: [BrandService, PrismaService]
})
export class BrandModule {}

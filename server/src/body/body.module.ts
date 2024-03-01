import { Module } from '@nestjs/common';
import { BodyService } from './body.service';
import { BodyController } from './body.controller';
import { PrismaService } from 'src/prisma.service';
import { CloudinaryModule } from 'src/cloudinary/cloudinary.module';

@Module({
  imports: [CloudinaryModule],
  controllers: [BodyController],
  providers: [BodyService, PrismaService]
})
export class BodyModule {}

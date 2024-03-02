import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './prisma.service';
import { ConfigModule } from "@nestjs/config"
import { UserModule } from './user/user.module';
import { PartModule } from './part/part.module';
import { CarModule } from './car/car.module';
import { CategoryModule } from './category/category.module';
import { BodyModule } from './body/body.module';
import { BrandModule } from './brand/brand.module';
import { ContactModule } from './contact/contact.module';
import { ReviewModule } from './review/review.module';
import { OrderModule } from './order/order.module';
import { LogoModule } from './logo/logo.module';
import { NavbarModule } from './navbar/navbar.module';
import { FooterModule } from './footer/footer.module';
import { PaginationModule } from './pagination/pagination.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { MulterModule } from '@nestjs/platform-express';
import { ChooseModule } from './choose/choose.module';
import { StatisticsModule } from './statistics/statistics.module';

@Module({
  imports: [ConfigModule.forRoot(), AuthModule, UserModule, MulterModule.register({ dest: './uploads' }), PartModule, CarModule, CategoryModule, BodyModule, BrandModule, ContactModule, ReviewModule, OrderModule, LogoModule, NavbarModule, FooterModule, PaginationModule, CloudinaryModule, ChooseModule, StatisticsModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}

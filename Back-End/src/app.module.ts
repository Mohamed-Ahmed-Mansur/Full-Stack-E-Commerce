/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './Endpoints/products/products.module';
// import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { OrdersModule } from './Endpoints/orders/orders.module';
import { UserModule } from './Endpoints/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { CategoryModule } from './Endpoints/category/category.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './Endpoints/user/roles.gurd';
// import { CorsModule } from '@nestjs/axios';
// import { CorsModule } from '@nestjs/platform-express';

@Module({
  imports: [
    ProductsModule,
    OrdersModule,
    UserModule,
    CategoryModule,
    // CorsModule,
    MongooseModule.forRoot(
      'mongodb+srv://hosamabdelaty25:0115060708090Mm@cluster0.2c6xoym.mongodb.net/E-Commerce',
    ),
    JwtModule.register({
      secret: 'project',
      signOptions: { expiresIn: '30d' },
    }),
  ],
  controllers: [AppController],
  providers: [AppService, { provide: APP_GUARD, useClass: RolesGuard }],
})
export class AppModule {}

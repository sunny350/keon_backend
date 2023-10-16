import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { AdminController } from './admin/admin.controller';
import { AdminService } from './admin/admin.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryController } from './category/category.controller';
import { CategoryService } from './category/category.service';

@Module({
  imports: [ConfigModule.forRoot(),MongooseModule.forRoot(process.env.DB_URL)],
  controllers: [AppController,AdminController, CategoryController],
  providers: [AppService,AdminService, CategoryService],
})
export class AppModule {}

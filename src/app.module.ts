import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { AdminController } from './admin/admin.controller';
import { AdminService } from './admin/admin.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryController } from './category/category.controller';
import { CategoryService } from './category/category.service';
import { CategorySchema } from './schemas/category.schema';
import { ECollectionName } from './enum/common.enum';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';
import { ProductSchema } from './product/schemas/product.schema';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DB_URL),
    MongooseModule.forFeature([
      { name: "categories", schema: CategorySchema },
      { name: "products", schema: ProductSchema },
    ]),
  ],
  controllers: [AppController, CategoryController, ProductController , AdminController],
  providers: [AppService, CategoryService, ProductService , AdminService],
})
export class AppModule {}

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {

  @Prop()
  sku : string

  @Prop()
  categories_id : string[]

  @Prop()
  price : number

  @Prop()
  product_name : string

  @Prop()
  sizes : object[]

  @Prop()
  primary_image : string

  @Prop()
  images : string


}

export const ProductSchema = SchemaFactory.createForClass(Product);
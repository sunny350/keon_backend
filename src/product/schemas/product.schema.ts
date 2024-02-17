import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, now } from 'mongoose';

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
  size : string

  @Prop()
  primary_image : string

  @Prop()
  images : string[]

  @Prop()
  qty : number

  @Prop()
  discount_percent : number

  @Prop({default: now()})
  createdAt: Date;

  @Prop({default: now()})
  updatedAt: Date;


}

export const ProductSchema = SchemaFactory.createForClass(Product);
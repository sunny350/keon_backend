import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument , now } from 'mongoose';

export type CategoryDocument = HydratedDocument<Category>;

@Schema()
export class Category {
  @Prop()
  category_name: string;

  @Prop()
  parent_id: string;

  @Prop()
  is_parent: boolean;

  @Prop()
  child_categories: string[];

  @Prop({default: now()})
  createdAt: Date;

  @Prop({default: now()})
  updatedAt: Date;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
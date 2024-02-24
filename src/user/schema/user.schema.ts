import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument , now } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  user_name: string;

  @Prop()
  email_id: string;

  @Prop()
  password : string;

  @Prop()
  mobile_no: number;

  @Prop({default: now()})
  createdAt: Date;

  @Prop({default: now()})
  updatedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
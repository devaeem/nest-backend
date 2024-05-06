import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaOptions } from 'mongoose';
import { EntityBase } from '../entitybase';

export type ProductDocument = Product & Document;

const options: SchemaOptions = {
  collection: 'products',
};
@Schema({ ...options, timestamps: true })
export class Product extends EntityBase {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;

  @Prop()
  price: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);

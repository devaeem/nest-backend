import { Prop, Schema } from '@nestjs/mongoose';
import { SchemaOptions } from 'mongoose';

import { v4 as Uuid } from 'uuid';

const options: SchemaOptions = {
  id: false,
  toJSON: { virtuals: true },
};
@Schema(options)
export abstract class EntityBase {
  @Prop({ required: true, default: Uuid })
  _id: string;

  @Prop({ required: true, default: true })
  active: boolean;

  @Prop({ required: true, default: false })
  isdelete: boolean;
}

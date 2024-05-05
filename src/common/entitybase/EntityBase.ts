import { Prop, Schema } from '@nestjs/mongoose';

import { v4 as Uuid } from 'uuid';

@Schema()
export abstract class EntityBase {
  @Prop({ required: true, default: Uuid })
  _id: string;

  @Prop({ required: true, default: true })
  active?: boolean;

  @Prop({ required: true, default: false })
  isdelete?: boolean;
}

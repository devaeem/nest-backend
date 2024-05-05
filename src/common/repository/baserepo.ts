// base.repository.ts

import { Model } from 'mongoose';

export abstract class BaseMongooseRepository<T> {
  protected model: any;

  constructor(model: Model<T>) {
    this.model = model;
  }

  public async findAll(): Promise<T[]> {
    return await this.model.find().exec();
  }
}

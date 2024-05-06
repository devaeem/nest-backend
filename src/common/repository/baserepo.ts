import { Injectable } from '@nestjs/common';
import { Model, Document } from 'mongoose';

@Injectable()
export abstract class BaseMongoRepository<T extends Document> {
  protected constructor(protected readonly model: Model<T>) {}

  async create(doc: T): Promise<T> {
    const createdDoc = new this.model(doc);
    return await createdDoc.save();
  }

  async findAll(): Promise<T[]> {
    return await this.model.find().exec();
  }

  async findOne(id: string): Promise<T | null> {
    return await this.model.findById(id).exec();
  }

  async update(id: string, doc: Partial<T>): Promise<T | null> {
    return (await this.model
      .findByIdAndUpdate(id, doc, { new: true })
      .exec()) as T | null;
  }

  async delete(id: string): Promise<T | null> {
    return (await this.model.findByIdAndDelete(id).exec()) as T | null;
  }
}

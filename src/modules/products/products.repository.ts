import { Model } from 'mongoose';
import { InjectModel } from 'nestjs-typegoose';
import { Product, ProductDocument } from 'src/common/entity';
//import { BaseMongooseRepository } from 'src/common/repository';

export class ProducRepository {
  constructor(
    @InjectModel(Product) private productModel: Model<ProductDocument>,
  ) {}
  async getAll() {
    return await this.productModel.find().exec();
  }
}

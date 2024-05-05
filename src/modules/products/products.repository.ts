import { Model } from 'mongoose';
import { InjectModel } from 'nestjs-typegoose';
import { Product, ProductDocument } from 'src/common/entity';

export class ProducRepository {
  constructor(
    @InjectModel(Product) private productModel: Model<ProductDocument>,
  ) {}
  async getAll() {
    return await this.productModel.find().exec();
  }
}

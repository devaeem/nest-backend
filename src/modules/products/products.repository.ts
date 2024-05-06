import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from 'src/common/entity/product.schema';
import { BaseMongoRepository } from 'src/common/repository';

@Injectable()
export class ProductRepository extends BaseMongoRepository<ProductDocument> {
  // constructor(
  //   @InjectModel(Product.name) private readonly model: Model<ProductDocument>,
  // ) {
  //   super(model);
  // }

  protected readonly model: Model<ProductDocument>;

  constructor(
    @InjectModel(Product.name) mongoRepository: Model<ProductDocument>,
  ) {
    super(mongoRepository);
    this.model = mongoRepository;
  }

  async getAll(): Promise<Product[]> {
    return await this.findAll();
  }

  async createProduct(dto: any): Promise<Product> {
    return await this.create(dto);
  }
}

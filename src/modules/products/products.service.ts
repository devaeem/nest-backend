import { Injectable } from '@nestjs/common';
// import { CreateProductDto } from './dto/create-product.dto';
// import { UpdateProductDto } from './dto/update-product.dto';
import { ProducRepository } from './products.repository';
import { Product } from 'src/common/entity';
// import { InjectModel } from 'nestjs-typegoose';
// import { Model } from 'mongoose';

@Injectable()
export class ProductsService {
  // constructor(
  //   @InjectModel(Product) private productModel: Model<ProductDocument>,
  // ) {}

  constructor(private productRepository: ProducRepository) {}
  // create(createProductDto: CreateProductDto) {
  //   return 'This action adds a new product';
  // }

  // async findAll(): Promise<Product[]> {
  //   return this.productModel.find().exec();
  // }

  async findAll(): Promise<Product[]> {
    return await this.productRepository.getAll();
  }

  findOne(id: string) {
    return `This action returns a #${id} product`;
  }

  // update(id: string, updateProductDto: UpdateProductDto) {
  //   return `This action updates a #${id} product`;
  // }

  remove(id: string) {
    return `This action removes a #${id} product`;
  }
}

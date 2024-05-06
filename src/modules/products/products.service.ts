import { Injectable } from '@nestjs/common';
// import { CreateProductDto } from './dto/create-product.dto';
// import { UpdateProductDto } from './dto/update-product.dto';
import { ProductRepository } from './products.repository';
import { Product } from 'src/common/entity';

@Injectable()
export class ProductsService {
  constructor(private productRepository: ProductRepository) {}

  async findAll(): Promise<Product[]> {
    return await this.productRepository.getAll();
  }

  async careate(dto: any): Promise<Product> {
    return await this.productRepository.create(dto);
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

import { Injectable } from '@nestjs/common';
// import { CreateProductDto } from './dto/create-product.dto';
// import { UpdateProductDto } from './dto/update-product.dto';
import { ProducRepository } from './products.repository';
import { Product } from 'src/common/entity';

@Injectable()
export class ProductsService {
  constructor(private productRepository: ProducRepository) {}

  async findAll(): Promise<Product[]> {
    return await this.productRepository.getAll();
  }

  findOne(id: string) {
    return `This action returns a #${id} product`;
  }
}

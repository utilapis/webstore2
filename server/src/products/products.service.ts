import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  private products: Product[];

  constructor() {
    this.products = [
      {
        id: 1,
        name: '2 Mancuernas',
        price: 50,
        image: 'images/product-1.jpg',
        stock: 50,
      },
      {
        id: 2,
        name: 'Banco ajustable',
        price: 50,
        image: 'images/product-2.jpg',
        stock: 50,
      },
      {
        id: 3,
        name: 'Kit de pesas con estuche',
        price: 50,
        image: 'images/product-3.jpg',
        stock: 50,
      },
      {
        id: 4,
        name: 'Pesas',
        price: 50,
        image: 'images/product-4.jpg',
        stock: 50,
      },
      {
        id: 5,
        name: 'Pesa de 30Kg',
        price: 50,
        image: 'images/product-5.jpg',
        stock: 50,
      },
      {
        id: 6,
        name: 'Bolsa de boxeo con pie',
        price: 50,
        image: 'images/product-6.jpg',
        stock: 50,
      },
    ];
  }

  create(createProductDto: CreateProductDto) {
    return this.products.push(createProductDto);
  }

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    return this.products.find((p) => p.id === id);
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    this.products = this.products.filter((p) => p.id !== id);
    this.products.push(updateProductDto);
    return updateProductDto;
  }

  remove(id: number) {
    const eliminar = this.products.find((p) => p.id === id);
    this.products = this.products.filter((p) => p.id !== id);
    return eliminar;
  }
}

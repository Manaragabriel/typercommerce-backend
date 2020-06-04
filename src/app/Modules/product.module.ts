import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from '../../domain/Products/product.entity';

@Module({
   // controllers: [CategoryController],
    //providers: [CategoryService],
    imports: [TypeOrmModule.forFeature([Product])]
})
export class ProductModule{}
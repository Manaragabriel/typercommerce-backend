import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from '../../domain/Categories/category.entity';
import { CategoryService } from '../../domain/Categories/category.service'
import { CategoryController } from '../controllers/category.controller';
@Module({
    controllers: [CategoryController],
    providers: [CategoryService],
    imports: [TypeOrmModule.forFeature([Category])]
})
export class CategoryModule{}
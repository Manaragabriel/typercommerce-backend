import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { Category } from "./category.entity";
import { Repository, DeleteResult, UpdateResult} from 'typeorm';
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class CategoryService {
  
    constructor(
        @InjectRepository(Category)
        private categoryRepository: Repository<Category>,
    ){}
  
    async getCategories(filter): Promise<Category[]> {
        try{
            var categories = await this.categoryRepository.find(filter);
            return categories;
        } catch (error) {
            throw new HttpException('Internal', HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
  
    async createCategory(category): Promise<Category>{
        try{
            var newCategory = await this.categoryRepository.save(category);
            return newCategory;
        } catch (error) {
            throw new HttpException('Internal', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async updateCategory(categoryData, params){
        try{
            return await this.categoryRepository.update(params, categoryData);
        } catch (error) {
            throw new HttpException('Internal', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async deleteCategory(id: number){
        try{
            return await this.categoryRepository.delete({id,});
        } catch (error) {
            throw new HttpException('Internal', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
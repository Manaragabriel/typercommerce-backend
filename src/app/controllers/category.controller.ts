import { Controller, Get , Post, Put, Delete, Body, Res, Req, Param, UseFilters, UseGuards , Headers} from '@nestjs/common';
import { Category } from '../../domain/Categories/category.entity';
import { CategoryValidation } from '../validations/categories.validation';
import { CategoryService } from '../../domain/Categories/category.service';
@Controller('/categories')
export class CategoryController{

    constructor(private categoryService: CategoryService){}


    @Get()
    async getCategories(@Req() req ): Promise<Category[]>{
        try{
            return await this.categoryService.getCategories(req.query);
        } catch (error) {
            return error
        }
    }

    @Post()
    async createCategory(@Body() category: CategoryValidation){
        try{
            var newCategory = await this.categoryService.createCategory(category);
            return newCategory
        } catch (error) {
            return error
        }
    }

    @Put(':id')
    async updateCategory(@Body() category: CategoryValidation, @Param() params){
        try{
            var updatedCategory = await this.categoryService.updateCategory(category, params.id);
            return updatedCategory
        } catch (error) {
            return error
        }
    }

    @Delete(':id')
    async deleteCategory(@Param() params, @Res() res){
        try{
            var result = await this.categoryService.deleteCategory(params.id);
            if( result.affected ){
                res.send({"deleted" : true})
            }else{
                res.send({"deleted" : false})
            }
        
        } catch (error) {
            return error
        }
    }

}
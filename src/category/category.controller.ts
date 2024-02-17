import { Body, Controller, Get, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { AdminService } from 'src/admin/admin.service';
import { getCategoryDto } from './DTO/get_category.dto';

@Controller('category')
export class CategoryController {
    constructor(
        private readonly categoryService: CategoryService,
    ){}

    @Post('categoryHierarchy')
    async getCategoryHierarchy(@Body() body:getCategoryDto){
        try {
            const {category_id} = body

            // structucte category data with there child category 
            const categoryData = await this.categoryService.getCategory(category_id)
            return {
                success : true,
                data : categoryData[0]
            }
        } catch (error) {
            return {
                success : false,
                message : "unable to get category detail",
                error : error.message || error,
            }
        }

    }
}

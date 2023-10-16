import { Controller, Get } from '@nestjs/common';
import { CategoryService } from './category.service';
import { AdminService } from 'src/admin/admin.service';

@Controller('category')
export class CategoryController {
    constructor(
        private readonly categoryService: CategoryService,
    ){}

    @Get('')
    async fetchCategory(){
        let abc  = await this.categoryService.tp()
        console.log('abc :>> ', abc);
    }
}

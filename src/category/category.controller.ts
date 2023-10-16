import { Controller, Get } from '@nestjs/common';
import { CategoryService } from './category.service';
import { AdminService } from 'src/admin/admin.service';

@Controller('category')
export class CategoryController {
    constructor(
        private readonly categoriesService: CategoryService,
    ){}

    // @Get('')
    // async fetchCategory(){
    //     let abc  = await this.AdminService.tp()
    //     console.log('abc :>> ', abc);
    // }
}

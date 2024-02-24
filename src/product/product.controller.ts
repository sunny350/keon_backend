import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { getCategoryDto } from 'src/category/DTO/get_category.dto';

@Controller('product')
export class ProductController {
    constructor(
        private readonly productService: ProductService,
    ){}

    @Post('fetchProductsByCategory')
    async fetchProductsByCategory(@Body() body:getCategoryDto){
        try {
            const {category_id} = body
            let products = await this.productService.getProductsByCategory(category_id)
            return {
                success : true,
                data : products
            }
            
        } catch (error) {
            return {
                success : false,
                message : "unable to get products ",
                error : error.message || error,
            }
        }
    }
}
                
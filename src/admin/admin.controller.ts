import { Controller, Get } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {

    constructor(
        private readonly adminService: AdminService,
    ){}

    @Get('addProduct')
    async fetchCategory(){
        let body = {
            sku : "1002" ,
            product_name : "oversized_tshirt" ,
            categories_id : ["65d0d676be7deb8a0b04d267","65d0da6abe7deb8a0b06a97a"] ,
            price  : 900 ,
            size : "2xl",
            qty : 5,
            primary_image : "https://keonweb.s3.ap-south-1.amazonaws.com/abc.png",
            images :[
                "https://keonweb.s3.ap-south-1.amazonaws.com/abc.png",
                "https://keonweb.s3.ap-south-1.amazonaws.com/abc.png",
                "https://keonweb.s3.ap-south-1.amazonaws.com/abc.png"
            ],
            discount_percent : 10
        }
        let abc= await this.adminService.add(body)

        // let body = {
        //     category_name : "Tshirts",
        //     is_parent : true ,
        //     child_categories : ["65d0da6abe7deb8a0b06a97a" , "65d0da97be7deb8a0b06bf76"]

        // }
        // let abc= await this.adminService.addCategory(body)
        // ["65d0da6abe7deb8a0b06a97a" , "65d0da97be7deb8a0b06bf76"]
        console.log(abc);
    }
}

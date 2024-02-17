import { Controller, Get } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {

    constructor(
        private readonly adminService: AdminService,
    ){}

    @Get('addProduct')
    async fetchCategory(){
        // let body = {
        //     sku : "1002" ,
        //     product_name : "jeans_2" ,
        //     categories_id : [] ,
        //     price  :1000 ,
        //     size : {
        //         "28" : 2 ,
        //         "30" : 4 ,
        //         "32" : 3 ,
        //     }
        // }
        let body = {
            category_name : "Tshirts",
            is_parent : true ,
            child_categories : ["65d0da6abe7deb8a0b06a97a" , "65d0da97be7deb8a0b06bf76"]

        }
        let abc= await this.adminService.addCategory(body)
        // ["65d0da6abe7deb8a0b06a97a" , "65d0da97be7deb8a0b06bf76"]
        console.log(abc);
    }
}

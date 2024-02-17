import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductDocument } from 'src/product/schemas/product.schema';
import { Category, CategoryDocument } from 'src/schemas/category.schema';

@Injectable()
export class AdminService {
    constructor(
        @InjectModel("products") private products: Model<ProductDocument>,
        @InjectModel("categories") private categories: Model<CategoryDocument>,
    ){}

    async add(body){
        return await this.products.insertMany(body)
    }
    async addCategory(body){
        console.log(body);
        let abc = await this.categories.findOneAndUpdate({category_name : body.category_name},body ,{new:true , upsert : true   })
        console.log(abc);
        return abc 
    }
}

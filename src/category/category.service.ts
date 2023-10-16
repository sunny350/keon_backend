import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CategoryDocument } from 'src/schemas/category.schema';

@Injectable()
export class CategoryService {
    constructor(
        @InjectModel('categories') private Products: Model<CategoryDocument>,
    ){}

    async tp(){
        console.log("object");
    }
}

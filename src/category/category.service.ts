import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ECollectionName } from 'src/enum/common.enum';
import { CategoryDocument } from 'src/schemas/category.schema';

@Injectable()
export class CategoryService {
    constructor(
        @InjectModel(ECollectionName.CATEGORY) private CategoryRepo: Model<CategoryDocument>,
    ){}

    async tp(){
        const abc = await this.CategoryRepo.find({})
        return abc 
    }
}

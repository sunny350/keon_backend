import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { ECollectionName } from 'src/enum/common.enum';
import { CategoryDocument } from 'src/schemas/category.schema';

@Injectable()
export class CategoryService {
    constructor(
        @InjectModel("categories") private categories: Model<CategoryDocument>,
    ){}

    async getCategory(category_id){
        return await this.categories.aggregate([
          { $match: { _id: new mongoose.Types.ObjectId(category_id) } },
          {
            $addFields: {
                child_categories: {
                $map: {
                  input: "$child_categories",
                  as: "childId",
                  in: { $toObjectId: "$$childId" }
                }
              }
            }
          },
          {
            $lookup: {
                from: 'categories',
                localField: 'child_categories',
                foreignField: '_id',
                as: 'child_categories',
              },
          },
          {
            $project : {
                category_name : 1 ,
                "child_categories._id": 1,
                "child_categories.category_name": 1,
                "child_categories.parent_id": 1,
            }
          }
        ]);
    }
}

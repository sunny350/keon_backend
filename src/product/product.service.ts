import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductDocument } from './schemas/product.schema';

@Injectable()
export class ProductService {
    constructor(
        @InjectModel("products") private products: Model<ProductDocument>,
    ){}

    async getProductsByCategory(category_id){
        return await this.products.aggregate([
            {
              $match: {
                categories_id: {
                  $in: [
                    category_id
                  ]
                }
              }
            }, 
            {
              $group: {
                _id: '$sku', 
                categories_id: {
                  $first: '$categories_id'
                }, 
                product_name: {
                  $first: '$product_name'
                }, 
                discount_percent: {
                  $first: '$discount_percent'
                }, 
                images: {
                  $first: '$images'
                }, 
                primary_image: {
                  $first: '$primary_image'
                }, 
                price: {
                  $first: '$price'
                }, 
                sizes: {
                  $push: {
                    size: '$size', 
                    qty: '$qty', 
                    id: '$_id'
                  }
                }
              }
            }
          ])
    }
}

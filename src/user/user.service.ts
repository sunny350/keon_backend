import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument } from './schema/user.schema';
import * as validator from 'validator'
import * as jwt from 'jsonwebtoken'

@Injectable()
export class UserService {
    constructor(
        @InjectModel("users") private users: Model<UserDocument>,
    ){}

    async getUserByEmail(email){
        return await this.users.findOne({email_id : email})
    }

    async validateCreadientials(email , password){
        if(!validator.isEmail(email)){
            throw Error('Email is not valid..')
        }
        if(!validator.isStrongPassword(password,{
            minLength: 8,
            // minUppercase: 1,
            // minNumbers: 1,
         })){
            throw Error('Password not strong enough ')
        }
    }

    async saveUser(userDetail: { user_name: string; email_id: string; password: string; mobile_no: number; }){
        return await this.users.create(userDetail)
    }

    async createToken(_id:string){
        return jwt.sign({_id},process.env.SECRET , {expiresIn : '3d'})
    }
}

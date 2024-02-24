import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument } from './schema/user.schema';

@Injectable()
export class UserService {
    constructor(
        @InjectModel("users") private users: Model<UserDocument>,
    ){}
}

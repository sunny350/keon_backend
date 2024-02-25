import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { userLoginDto, userSignupDto } from './DTO/user.dto';
import * as bcrypt from 'bcrypt';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService,
    ){}

    @Post('signup')
    async userSignup(@Body() body:userSignupDto){
        try {

            const {name , surname , email , mobile_no , password} = body

            if(!email || !password || !mobile_no || !name || !surname){
                throw Error('All fields must be filled')
            }            
            await this.userService.validateCreadientials(email , password)

            const exist =  await this.userService.getUserByEmail(email)
            if(exist){
                throw Error('Email already in use..')
            }

            const salt = await bcrypt.genSalt(10)
            const hash = await bcrypt.hash(password , salt)

            const saveUser = await this.userService.saveUser({
                user_name : name + " " + surname ,
                email_id : email ,
                password : hash ,
                mobile_no : mobile_no
            })

            const token =  await this.userService.createToken(saveUser._id.toString())

            return {
                success : true ,
                message : "user signup successfully .",
                body : {user_id : saveUser._id , email : saveUser.email_id , token  }
            }

        } catch (error) {
            return {
                success : false,
                message : "user signup failed " ,
                error : error.message || error
            }
        }
    } 

    @Post('login')
    async userLogin(@Body() body:userLoginDto){
        try {
            const {email , password} = body

            if(!email || !password ){
                throw Error('All fields must be filled')
            } 

            const user =  await this.userService.getUserByEmail(email)
            if(!user){
                throw Error('Incorrect email')
            }

            const match = await bcrypt.compare(password , user.password)

            if(!match){
                throw Error('Incorrect Password..')
            }

            const token  = await this.userService.createToken(user._id.toString())

            return {
                success : true ,
                message : "user login successfully .",
                body : {user_id : user._id , email : user.email_id , token  }
            }


        } catch (error) {
            return {
                success : false,
                message : "user login failed " ,
                error : error.message || error
            } 
        }

    }
}

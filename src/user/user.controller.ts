import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { userSignupDto } from './DTO/user.dto';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService,
    ){}

    @Post('signup')
    async userSignup(@Body() body:userSignupDto){

    } 
}

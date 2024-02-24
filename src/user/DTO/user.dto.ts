import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class userSignupDto {
    @IsNotEmpty()
    @ApiProperty({example : "Sunny_Ramani"})
    user_name : string

    @IsNotEmpty()
    @ApiProperty({example : "sunnyramani201311@gmail.com"})
    email : string

    @IsNotEmpty()
    @ApiProperty({example : 8080648674})
    mobile_no : number

    @IsNotEmpty()
    @ApiProperty({example : ""})
    password  : string
}
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class userSignupDto {
    @IsNotEmpty()
    @ApiProperty({example : "Sunny"})
    name : string

    @IsNotEmpty()
    @ApiProperty({example : "Ramani"})
    surname : string

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

export class userLoginDto {
    @IsNotEmpty()
    @ApiProperty({example : "sunnyramani201311@gmail.com"})
    email : string

    @IsNotEmpty()
    @ApiProperty({example : ""})
    password  : string
}
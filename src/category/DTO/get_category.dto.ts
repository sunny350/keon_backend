import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class getCategoryDto {
    @IsNotEmpty()
    @ApiProperty({example : "65d0d676be7deb8a0b04d267"})
    category_id : string
}
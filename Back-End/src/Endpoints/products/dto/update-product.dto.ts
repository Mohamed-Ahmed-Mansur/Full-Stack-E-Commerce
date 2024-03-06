import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { IsNotEmpty, IsNumber, IsPositive, IsString, IsArray, ArrayNotEmpty, ArrayMinSize } from "class-validator";


export class UpdateProductDto extends PartialType(CreateProductDto) {
    @IsNumber()
    @IsPositive()
    @IsNotEmpty()
    id:number;
     
    @IsString()
    @IsNotEmpty()
    title:string;

    @IsNumber()
    @IsPositive()
    @IsNotEmpty()
    price:number;

    @IsString()
    @IsNotEmpty()
    description:string

  
    @IsArray()
    @ArrayNotEmpty()
    @ArrayMinSize(1)
    images: string[];

    @IsString()
    @IsNotEmpty()
    creationAt: string;

    @IsString()
    @IsNotEmpty()
    updatedAt: string;

    @IsNotEmpty()
    category: {
        id: number;
        name: string;
        image: string;
        creationAt: string;
        updatedAt: string;
    };
}

import { IsNotEmpty, IsNumber, IsPositive, IsString, IsArray, ArrayNotEmpty, ArrayMinSize } from "class-validator";
export class CreateProductDto {

    @IsNumber()
    @IsPositive()
    @IsNotEmpty()
   public id:number;
     
    @IsString()
    @IsNotEmpty()
    public title:string;

    @IsNumber()
    @IsPositive()
    @IsNotEmpty()
    public price:number;

    @IsString()
    @IsNotEmpty()
    public description:string

  
    @IsArray()
    @ArrayNotEmpty()
    @ArrayMinSize(1)
    public  images: string[];

    @IsString()
    @IsNotEmpty()
    public  creationAt: string;

    @IsString()
    @IsNotEmpty()
    public  updatedAt: string;

    @IsNotEmpty()
    public category: {
        id: number;
        name: string;
        image: string;
        creationAt: string;
        updatedAt: string;
    };

}





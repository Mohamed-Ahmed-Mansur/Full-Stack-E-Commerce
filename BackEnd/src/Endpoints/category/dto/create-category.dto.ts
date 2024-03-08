import {
  IsArray,
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Length,
  Min,
  MinLength,
} from 'class-validator';
export class CreateCategoryDto {
  @IsNotEmpty()
  @IsNumber()
  id: number;
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  image: string;
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  creationAt: string;
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  updatedAt: string;
}

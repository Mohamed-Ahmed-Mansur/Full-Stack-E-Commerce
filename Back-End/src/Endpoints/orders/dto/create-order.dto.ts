import {
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  IsArray,
  ArrayNotEmpty,
  ArrayMinSize,
} from 'class-validator';

export class CreateOrderDto {
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  orderID: number;
  @IsArray()
  @ArrayNotEmpty()
  @ArrayMinSize(1)
  category: string[];
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  userID: number;
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  totalPrice: number;
  @IsArray()
  @ArrayNotEmpty()
  @ArrayMinSize(1)
  productID: number[];
}

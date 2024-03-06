import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderDto } from './create-order.dto';
import {
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsArray,
  ArrayNotEmpty,
  ArrayMinSize,
} from 'class-validator';

export class UpdateOrderDto extends PartialType(CreateOrderDto) {
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

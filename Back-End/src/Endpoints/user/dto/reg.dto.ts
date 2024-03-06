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

export class regDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  public name: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(10)
  public age: number;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  public email: string;

  @IsNotEmpty()
  @IsString()
  public password: string;

  @IsNotEmpty()
  @IsString()
  @Length(4, 6)
  public gender: string;

  @IsNotEmpty()
  @IsNumber()
  public phone: Number;

  @IsBoolean()
  public isAdmin: boolean;

  @IsBoolean()
  public isSeller: boolean;

  @IsBoolean()
  public isUser: boolean;

  @IsArray()
  public wishlist: [];

  @IsArray()
  public cart: [];

  @IsArray()
  public checkout: [];

  @IsNotEmpty()
  @IsNumber()
  public userId: number;
}

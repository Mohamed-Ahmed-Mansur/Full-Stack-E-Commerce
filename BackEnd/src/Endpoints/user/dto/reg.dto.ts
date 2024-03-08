import {
  IsArray,
  IsBoolean,
  IsEmail,
  IsEmpty,
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
  @IsString()
  public address: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  public email: string;

  @IsNotEmpty()
  @IsString()
  public password: string;

  @IsNotEmpty()
  @IsNumber()
  public phone: Number;
  @IsNotEmpty()
  public isAdmin: boolean;
  @IsNotEmpty()
  @IsBoolean()
  public isSeller: boolean;

  @IsBoolean()
  @IsNotEmpty()
  public isUser: boolean;

  @IsArray()
  @IsNotEmpty()
  public wishlist: [];

  @IsArray()
  @IsNotEmpty()
  public cart: [];

  @IsArray()
  @IsNotEmpty()
  public checkout: [];
  @IsEmpty()
  public userID?: number;
  @IsEmpty()
  public flag?: boolean;
}

import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsPositive,
  IsString,
} from 'class-validator';

export class createOrderRequest {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsPositive()
  @IsInt()
  price: number;

  @IsPhoneNumber()
  phoneNumber: string;

  @IsOptional()
  @IsString()
  description: string;
}

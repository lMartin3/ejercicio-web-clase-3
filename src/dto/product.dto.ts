import { IsDefined, IsNotEmpty, IsOptional, IsString, Length, MaxLength, Min, IsNumber } from "class-validator";
import { Type } from "class-transformer";
import "reflect-metadata";

export class ProductCreateDto {
  @IsString()
  @Length(5, 20)
  name!: string;

  @IsOptional()
  @IsString()
  @MaxLength(20)
  description?: string;

  @IsDefined()
  @IsString()
  @IsNotEmpty()
  category!: string;

  @Type(() => Number)
  @IsNumber({ allowNaN: false, allowInfinity: false }, { message: 'price must be a number' })
  @Min(0)
  price!: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber({ allowNaN: false, allowInfinity: false }, { message: 'stock must be a number' })
  @Min(0)
  stock?: number;
}

export class ProductUpdateDto {
  @IsOptional()
  @IsString()
  @Length(5, 20)
  name?: string;

  @IsOptional()
  @IsString()
  @MaxLength(20)
  description?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  category?: string;

  @IsOptional()
  @Type(() => Number)
  @IsNumber({ allowNaN: false, allowInfinity: false }, { message: 'price must be a number' })
  @Min(0)
  price?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber({ allowNaN: false, allowInfinity: false }, { message: 'stock must be a number' })
  @Min(0)
  stock?: number;
}

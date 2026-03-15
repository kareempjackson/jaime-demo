import { IsString, IsNotEmpty, IsInt, IsPositive, IsOptional, Min } from 'class-validator';

export class UpdateMenuItemDto {
  @IsString()
  @IsNotEmpty({ message: 'Name cannot be empty' })
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsInt()
  @IsPositive({ message: 'Price must be greater than 0' })
  @IsOptional()
  priceCents?: number;

  @IsString()
  @IsNotEmpty({ message: 'Category cannot be empty' })
  @IsOptional()
  category?: string;

  @IsInt()
  @Min(0)
  @IsOptional()
  position?: number;
}

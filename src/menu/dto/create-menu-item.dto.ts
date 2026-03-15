import { IsString, IsNotEmpty, IsInt, IsPositive, IsOptional, Min } from 'class-validator';

export class CreateMenuItemDto {
  @IsString()
  @IsNotEmpty({ message: 'Name is required' })
  name: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsInt()
  @IsPositive({ message: 'Price must be greater than 0' })
  priceCents: number;

  @IsString()
  @IsNotEmpty({ message: 'Category is required' })
  category: string;

  @IsInt()
  @Min(0)
  @IsOptional()
  position?: number;
}

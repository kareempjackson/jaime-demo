import { IsString, IsNotEmpty, Length } from 'class-validator';

export class LoginDto {
  @IsString()
  @IsNotEmpty()
  store_code: string;

  @IsString()
  @IsNotEmpty()
  @Length(4, 6)
  pin: string;
}

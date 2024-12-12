import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateBookDto {
  @IsString()
  @IsOptional()
  readonly title: string;

  @IsNumber()
  @IsOptional()
  readonly year: number;
}

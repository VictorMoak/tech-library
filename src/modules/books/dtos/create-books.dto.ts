import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateBookDto {
    @IsString()
    @IsNotEmpty()
    readonly title: string;

    @IsNumber()
    @IsNotEmpty()
    readonly year: number;
}

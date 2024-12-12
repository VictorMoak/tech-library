import {
    IsNotEmpty,
    IsString,
} from 'class-validator';

export class CreateBookDto {
    @IsString()
    @IsNotEmpty()
    readonly title: string;

    @IsString()
    @IsNotEmpty()
    readonly year: string;
}

import { Controller, Get, Param } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
    constructor(private readonly booksService: BooksService) {}
    @Get()
    findAll() {
        return this.booksService.findAll();
    }

    @Get(':id')
    findId(@Param('id') id: number) {
        return this.booksService.findId(id);
    }
}

import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { BooksService } from './books.service';
import { UpdateBookDto } from './dtos/update-books.dto';
import { CreateBookDto } from './dtos/create-books.dto';

@Controller('books')
export class BooksController {
    constructor(private readonly booksService: BooksService) { }

    @Post()
    create(@Body() createBookDto: CreateBookDto) {
        return this.booksService.create(createBookDto);
    }

    @Get()
    findAll() {
        return this.booksService.findAll();
    }

    @Get(':id')
    findId(@Param('id') id: number) {
        return this.booksService.findId(id);
    }

    @Patch(':id')
    update(@Param('id') id: number, @Body() updateBookDto: UpdateBookDto) {
        return this.booksService.updateById(id, updateBookDto);
    }
}

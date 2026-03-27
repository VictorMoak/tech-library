import { Controller, Get, Param } from '@nestjs/common';
import { BooksService } from './books.service';

    @Controller('books')
    export class BooksController {
    constructor(private readonly booksService: BooksService) {}

    @Delete(':id')
    async deleteBook(@Param('id', ParseIntPipe) id: number) {
        const result = await this.booksService.deleteBook(id);
        if (!result) {
        throw new NotFoundException(`Book with ID ${id} not found`);
        }
        return { message: 'Book deleted successfully' };
    }
}

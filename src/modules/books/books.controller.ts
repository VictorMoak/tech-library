import { Controller, Delete, Get, NotFoundException, Param } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Delete(':id')
  async deleteBook(@Param('id') id: string) {
    const result = await this.booksService.deleteBook(Number(id));  
    if (!result) {
      throw new NotFoundException('Book not found');
    }
    return { message: 'Book deleted successfully' };
  }

  @Get()
  async getAllBooks() {
    const books = await this.booksService.findAll();
    return books;
  }
}

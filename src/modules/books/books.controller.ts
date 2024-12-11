import { Controller, Put, Param, Body } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Put(':id')
  async updateBook(
    @Param('id') id: number, 
    @Body() updateData: { title: string; year: number }
  ): Promise<{ message: string }> {
    const message = await this.booksService.updateBook(id, updateData);
    return { message };
  }
}

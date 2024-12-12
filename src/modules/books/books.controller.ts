import { Controller, Get, Post, Param, Body, HttpException, HttpStatus } from '@nestjs/common';
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

  @Post()
  createBook(@Body() body: { title: string; year: number }) {
    const { title, year } = body;
    if (!title || !year) {
      throw new HttpException('Título e ano são obrigatórios', HttpStatus.BAD_REQUEST);
    }
    // Aqui você pode adicionar a lógica para salvar o livro no banco de dados
    return { message: 'Book created successfully' };
  }
}

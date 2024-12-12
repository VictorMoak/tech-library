import { Controller, Get, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): object {
    return this.appService.getHello();
  }

  @Post('books')
  createBook(@Body() body: { title: string; year: number }) {
    const { title, year } = body;
    if (!title || !year) {
      throw new HttpException('Título e ano são obrigatórios', HttpStatus.BAD_REQUEST);
    }
    // Aqui você pode adicionar a lógica para salvar o livro no banco de dados
    return { message: 'Book created successfully' };
  }
}

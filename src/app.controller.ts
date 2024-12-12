import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): object {
    return this.appService.getHello();
  }
}
  @Post('livros')
  createBook(@Body() createBookDto: { titulo: string; autor: string; ano: number }): object {
  if (!createBookDto.titulo || !createBookDto.autor || !createBookDto.ano) {
    return { mensagem: 'Todos os campos (titulo, autor, ano) são obrigatórios.' };
  }
  const novoLivro = this.appService.createBook(createBookDto);

  return { mensagem: 'Livro criado com sucesso!', livro: novoLivro };
}

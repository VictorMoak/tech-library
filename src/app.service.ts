import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private livros = []; 

  getHello(): object {
    return { message: 'Hello World!' };
  }

  createBook(createBookDto: { titulo: string; autor: string; ano: number }): object {
    const novoLivro = {
      id: this.livros.length + 1, 
      ...createBookDto,
    };

    this.livros.push(novoLivro); 
    return novoLivro;
  }
}


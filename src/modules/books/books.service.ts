import { Injectable } from '@nestjs/common';
import { BookRepository } from './books.repository';
import { Book } from './books.entity'; // Adicione esta linha

@Injectable()
export class BooksService {
  constructor(private readonly bookRepository: BookRepository) {}

  findAll() {
    return this.bookRepository.findAll();
  }

  findId(id: number) {
    return this.bookRepository.findId(id);
  }

  createBook(book: Partial<Book>) {
    return this.bookRepository.repository.save(book);
  }
}

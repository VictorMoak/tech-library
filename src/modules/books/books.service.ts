import { Injectable, NotFoundException } from '@nestjs/common';
import { BookRepository } from './books.repository';
import { Book } from './books.entity';

@Injectable()
export class BooksService {
  constructor(
    private readonly bookRepository: BookRepository,
  ) {}

  async findAll() {
    const books = await this.bookRepository.findAll();
    return books;
  }

  async findId(id: number) {
    const book = await this.bookRepository.repository.findOne({
      where: { id },
      select: ['title', 'year'],
    });

    if (!book) {
      throw new NotFoundException('Book not found');
    }

    return book;
  }

  
  async deleteBook(id: number): Promise<boolean> {
    const book = await this.bookRepository.repository.findOne({ where: { id } });
    if (!book) {
      return false;  
    }
    await this.bookRepository.repository.remove(book);  
    return true;  
  }
}

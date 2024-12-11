import { Inject, Injectable } from '@nestjs/common';

import { BookRepository } from './books.repository';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: BookRepository,
  ) {}

  async deleteBook(id: number): Promise<boolean> {
    const book = await this.bookRepository.findOne({ where: { id } });
    if (!book) {
      return false;
    }
    await this.bookRepository.remove(book);
    return true;
  }
}
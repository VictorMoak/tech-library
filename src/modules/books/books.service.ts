import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './books.entity';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private booksRepository: Repository<Book>,
  ) {}

  async updateBook(id: number, updateData: { title: string; year: number }): Promise<string> {
    const book = await this.booksRepository.findOne({
      where: { id },
    });
    if (!book) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }

    book.title = updateData.title;
    book.year = updateData.year;

    await this.booksRepository.save(book);
    return 'Book updated successfully';
  }
}
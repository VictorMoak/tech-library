import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Book } from './books.entity';

@Injectable()
export class BooksService {
    constructor(
        @Inject('BOOK_REPOSITORY')
        private bookRepository: Repository<Book>,
    ) {}

    async findAll() {
        const books = await this.bookRepository.find();

        return books;
    }
}

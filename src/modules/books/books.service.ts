import { Inject, Injectable } from '@nestjs/common';

import { BookRepository } from './books.repository';

@Injectable()
export class BooksService {
    constructor(
        private readonly bookRepository: BookRepository,
    ) {}

    async findAll() {
        const books = await this.bookRepository.findAll();

        return books;
    }
}

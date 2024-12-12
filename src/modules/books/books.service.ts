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

    async findId(id: number) {
        const book = await this.bookRepository.repository.findOne({
            where: { id },
            select: ['title', 'year'],
        });
        return book;
    }

    async updateById(id: number) {
        const book = await this.bookRepository.repository.findOne({
            where: { id },
        });
        return book;
    }

}
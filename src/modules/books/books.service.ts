import { Injectable } from '@nestjs/common';

import { BookRepository } from './books.repository';
import { CreateBookDto } from './dtos/create-books.dto';
import { UpdateBookDto } from './dtos/update-books.dto';

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

    async create(createBookDto: CreateBookDto) {
        await this.bookRepository.repository.save(createBookDto);
        return { message: 'Book created successfully' };
    }

    async updateById(id: number, updateBookDto: UpdateBookDto) {
        console.log(updateBookDto);
        await this.bookRepository.repository.update(id, updateBookDto);

        return { message: 'Book updated successfully' };
    }

}
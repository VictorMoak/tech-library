
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Book } from '../books/books.entity.js';
import { BooksService } from '../books/books.service.js';
import { BookRepository } from '../books/books.repository.js';
import { typeOrmDataSourceConfig } from './config/data-source.js';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmDataSourceConfig),
    TypeOrmModule.forFeature([Book]),
  ],
  providers: [BooksService, BookRepository],
  exports: [TypeOrmModule, BooksService],
})
export class DatabaseModule {}

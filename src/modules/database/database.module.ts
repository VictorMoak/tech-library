import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Book } from '../books/books.entity';
import { BooksService } from '../books/books.service';
import { BookRepository } from '../books/books.repository';

import { Author } from '../authors/author.entity';
import { AuthorService } from '../authors/author.service';
import { AuthorRepository } from '../authors/author.repository';

import { typeOrmDataSourceConfig } from './config/data-source';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmDataSourceConfig),
    TypeOrmModule.forFeature([Book, Author]),
  ],
  providers: [BooksService, BookRepository, AuthorService, AuthorRepository],
  exports: [TypeOrmModule, BooksService, AuthorService],
})
export class DatabaseModule {}

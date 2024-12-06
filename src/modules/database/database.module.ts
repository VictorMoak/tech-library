
import { Module } from '@nestjs/common';
import { databaseProviders } from './ormconfig.providers.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksService } from '../books/books.service.js';
import { typeOrmDataSourceConfig } from './config/data-source.js';
import { Book } from '../books/books.entity.js';
import { BookRepository } from '../books/books.repository.js';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmDataSourceConfig),
    TypeOrmModule.forFeature([Book]),
  ],
  providers: [BooksService, BookRepository],
  exports: [TypeOrmModule, BooksService],
})
export class DatabaseModule {}

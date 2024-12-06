import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthorsService } from './authors.service';
import { AuthorsController } from './authors.controller';
import { AuthorRepository } from './authors.repository';
import { BookRepository } from '../books/books.repository';
import { Book } from '../books/books.entity';
import { Author } from './authors.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Author, Book])],
  controllers: [AuthorsController],
  providers: [AuthorsService, AuthorRepository, BookRepository],
})
export class AuthorsModule {}
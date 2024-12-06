import { Module } from '@nestjs/common';

import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { DatabaseModule } from '../database/database.module';
import { BookRepository } from './books.repository';

@Module({
  imports: [DatabaseModule],
  controllers: [BooksController],
  providers: [BookRepository, BooksService]
})
export class BooksModule {}

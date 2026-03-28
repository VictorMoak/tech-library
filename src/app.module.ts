import { Module } from '@nestjs/common';

import { AppService } from './app.service';
import { AppController } from './app.controller';
import { BooksModule } from './modules/books/books.module';
import { DatabaseModule } from './modules/database/database.module';
import { AuthorsModule } from './modules/authors/author.module';

@Module({
  imports: [BooksModule, DatabaseModule, AuthorsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

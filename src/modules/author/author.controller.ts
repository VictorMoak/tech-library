import { Controller, Get, Param, Post } from '@nestjs/common';
import { AuthorService } from './author.service';
import { Author } from './author.entity';

@Controller('books')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Post()
  create(author: Author) {
    return this.authorService.create(author);
  }
}

import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { AuthorService } from './author.service';

@Controller('authors')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Get()
  findAll() {
    return this.authorService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: number) {
    return this.authorService.findById(id);
  }

  @Post()
  createAuthor(@Body() createData: any) {
    return this.authorService.create(createData);
  }
}

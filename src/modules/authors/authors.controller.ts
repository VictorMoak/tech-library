import { Controller, Delete, Param, ParseIntPipe } from '@nestjs/common';

import { AuthorsService } from './authors.service';

@Controller('authors')
export class AuthorsController {
  constructor(private readonly authorsService: AuthorsService) {}

  @Delete(':id')
  async deleteAuthor(@Param('id', ParseIntPipe) id: number) {
    return this.authorsService.deleteAuthor(id);
  }
}
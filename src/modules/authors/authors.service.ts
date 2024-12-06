import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';

import { AuthorRepository } from './authors.repository';

@Injectable()
export class AuthorsService {
  constructor(private readonly authorRepository: AuthorRepository) {}

  async deleteAuthor(id: number) {
    const author = await this.authorRepository.findOneById(id);

    if (!author) {
      throw new NotFoundException('Author not found');
    }

    if (author.books.length > 0) {
      throw new BadRequestException('Cannot delete author with associated books');
    }

    await this.authorRepository.delete(id);

    return { message: 'Author deleted successfully' };
  }
}
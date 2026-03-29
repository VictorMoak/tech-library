import { Inject, Injectable } from '@nestjs/common';

import { AuthorRepository } from './author.repository';
import { Author } from './author.entity';

@Injectable()
export class AuthorService {
  constructor(private readonly authorRepository: AuthorRepository) {}

  async create(author: Author) {
    const response = await this.authorRepository.create(author);
    return response;
  }
}

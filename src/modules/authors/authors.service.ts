import { Injectable } from '@nestjs/common';

import { AuthorRepository } from './authors.repository';

@Injectable()
export class AuthorsService {
  constructor(private readonly authorRepository: AuthorRepository) {}

  async findAll() {
    return this.authorRepository.findAll();
  }
}
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Author } from './authors.entity';

@Injectable()
export class AuthorRepository {
  constructor(
    @InjectRepository(Author)
    public readonly repository: Repository<Author>,
  ) {}

  public findAll() {
    return this.repository.find({ relations: ['books'] });
  }
}
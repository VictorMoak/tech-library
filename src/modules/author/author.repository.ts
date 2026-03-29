import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Author } from './author.entity';

@Injectable()
export class AuthorRepository {
  constructor(
    @InjectRepository(Author)
    public readonly repository: Repository<Author>,
  ) {}

  public create(author: Author) {
    return this.repository.create(author);
  }
}

import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Author } from './author.Entity';

@Injectable()
export class AuthorRepository {
  constructor(
    @InjectRepository(Author)
    public readonly repository: Repository<Author>,
  ) {}

  public async findById(id: number) {
    return this.repository.findOneBy({ id });
  }

  public async updateAuthor(id: number, data: Partial<Author>) {
    await this.repository.update(id, data);
    return this.repository.findOneBy({ id });
  }
}

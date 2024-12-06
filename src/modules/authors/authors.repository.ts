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

  public async findOneById(id: number) {
    return this.repository.findOne({ where: { id }, relations: ['books'] });
  }

  public async delete(id: number) {
    return this.repository.delete(id);
  }
}
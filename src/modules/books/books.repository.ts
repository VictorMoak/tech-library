import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './books.entity';

@Injectable()
export class BookRepository {
  constructor(
    @InjectRepository(Book)
    public readonly repository: Repository<Book>,
  ) {}

  public findAll() {
    return this.repository.find();
  }

  public findId(id: number) {
    return this.repository.findOne({
      where: { id },
      select: ['title', 'year'],
    });
  }
}

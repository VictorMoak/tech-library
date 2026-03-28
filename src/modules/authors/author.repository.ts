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

  public findAll() {
    return this.repository.find();
  }

  public findById(id: number) {
    return this.repository.findOne({
      where: { id },
      select: ['name', 'birthdate', 'nationality'],
    });
  }

  public create(authorData: Partial<Author>) {
    const author = this.repository.create(authorData);
    return author;
  }

  public save(author: Author) {
    return this.repository.save(author);
  }
}

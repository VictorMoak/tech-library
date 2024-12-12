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
  
  
  public findId(id: number) {
    return this.repository.findOne({
      where: { id },
      select: ['name', 'birthdate', 'nationality'],
    });
  }

}
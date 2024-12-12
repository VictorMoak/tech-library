import { Injectable } from '@nestjs/common';

import { AuthorRepository } from './author.repository';

@Injectable()
export class AuthorService {
  constructor(
    private readonly authorRepository: AuthorRepository,
  ) {}

  async findAll() {
    const authors = await this.authorRepository.findAll();
    return authors;
  }

  async findById(id: number) {
    const author = await this.authorRepository.repository.findOne({
      where: { id },
      select: ['name', 'birthdate', 'nationality'],
    });
    return author;
  }

  async create(createData: any) {
    const author = this.authorRepository.create(createData);
    await this.authorRepository.save(author);
    return { message: 'Author created successfully' };
  }
}

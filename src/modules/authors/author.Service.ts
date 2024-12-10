import { Injectable, NotFoundException } from '@nestjs/common';

import { AuthorRepository } from './author.Repository';

@Injectable()
export class AuthorsService {
  constructor(private readonly authorRepository: AuthorRepository) {}

  async updateAuthor(id: number, updateData: { name: string; birthdate: Date; nationality: string }) {
    const author = await this.authorRepository.findById(id);

    if (!author) {
      throw new NotFoundException(`Author with id ${id} not found`);
    }

    const updatedAuthor = await this.authorRepository.updateAuthor(id, updateData);
    return updatedAuthor;
  }
}

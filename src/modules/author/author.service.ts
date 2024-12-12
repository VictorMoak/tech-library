import { Inject, Injectable } from '@nestjs/common';

import { AuthorRepository } from './author.repository';

@Injectable()
export class AuthorService {
    constructor(
        private readonly authorRepository: AuthorRepository,
    ) {}


    async findId(id: number) {
        const author = await this.authorRepository.repository.findOne({
            where: { id },
            select: ['name', 'nationality', 'birthdate'],
        });
        return author;
    }

}
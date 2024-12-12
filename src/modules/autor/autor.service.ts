import { Inject, Injectable } from '@nestjs/common';

import { AutorRepository } from './autor.repository';

@Injectable()
export class AutorService {
    constructor(
        private readonly autorRepository: AutorRepository,
    ) {}

    async findAll() {
        const books = await this.autorRepository.findAll();

        return books;
    }

    async findId(id: number) {
        const book = await this.autorRepository.repository.findOne({
            where: { id },
            select: ['name', 'birthdate','nationality'],
        });
        return book;
    }

}
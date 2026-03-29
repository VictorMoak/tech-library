import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Autor } from './autor.entity';

@Injectable()
export class AutorRepository {
  constructor(
    @InjectRepository(Autor)
    public readonly repository: Repository<Autor>,
  ) {}
  
  public findAll() {
    return this.repository.find();
  }

  public findId(id: number) {
    return this.repository.findOne({
      where: { id },
      select: ['name', 'birthdate', 'nationality'],
    });
  }
  }

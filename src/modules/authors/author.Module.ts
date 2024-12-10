import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Author } from './author.Entity';
import { AuthorRepository } from './author.Repository';
import { AuthorsService } from './author.Service';
import { AuthorsController } from './author.Controller';

@Module({
  imports: [TypeOrmModule.forFeature([Author])],
  providers: [AuthorRepository, AuthorsService],
  controllers: [AuthorsController],
})
export class AuthorsModule {}

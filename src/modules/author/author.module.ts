import { Module } from '@nestjs/common';

import { AuthorService } from './author.service';
import { AuthorController } from './author.controller';
import { DatabaseModule } from '../database/database.module';
import { AuthorRepository } from './author.repository';

@Module({
  imports: [DatabaseModule],
  controllers: [AuthorController],
  providers: [AuthorRepository, AuthorService]
})
export class AuthorModule {}

import { Module } from '@nestjs/common';

import { AutorController } from './autor.controller';
import {  Autor } from './autor.entity';
import { DatabaseModule } from '../database/database.module';
import { AutorRepository } from './autor.repository';
import { AutorService } from './autor.service';

@Module({
  imports: [DatabaseModule],
  controllers: [AutorController],
  providers: [AutorRepository, AutorService]
})
export class AutorModule {}

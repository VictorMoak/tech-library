import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Author } from '../authors/authors.entity';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  year: number;

  @ManyToOne(() => Author, (author) => author.books)
  author: Author;
}
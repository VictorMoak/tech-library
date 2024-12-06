
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { Author } from '../authors/authors.entity';

@Entity()
export class Book {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  year: number;

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  @ManyToOne(() => Author, (author) => author.books, { nullable: false, onDelete: 'CASCADE' })
  author: Author;
}

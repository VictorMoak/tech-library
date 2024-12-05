import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany } from 'typeorm';
import { Book } from './books.entity';


@Entity()
export class Author {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  birthdate: Date;

  @Column({ nullable: true })
  nationality?: string;

  @OneToMany(() => Book, (book) => book.author)
  books: Book[];
}
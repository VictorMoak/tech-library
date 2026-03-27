import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { Book } from '../books/books.entity'; // Importando a entidade Book

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

  @OneToMany(() => Book, book => book.author)
  books: Book[];
}

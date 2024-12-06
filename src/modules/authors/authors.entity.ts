import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany} from 'typeorm';
import { Book } from '../books/books.entity';

  @Entity()
  export class Author {

    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: 'varchar', nullable: false })
    name: string;
  
    @Column({ type: 'date', nullable: false })
    birthdate: Date;
  
    @Column({ type: 'varchar', nullable: true })
    nationality?: string;
  
    @OneToMany(() => Book, (book) => book.author)
    books: Book[];
  }
import {Entity, PrimaryGeneratedColumn, Column,  ManyToOne, JoinColumn } from 'typeorm';

import Book from 'modules/books/entities/Book';

@Entity('authors')
class Author {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Book)
  @JoinColumn({ name: 'book_id' })
  book: Book
}

export default Author;
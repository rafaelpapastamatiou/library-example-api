import {Entity, PrimaryGeneratedColumn, Column,  ManyToOne, JoinColumn } from 'typeorm';

import Book from 'modules/books/entities/Book';

@Entity('comments')
class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('text')
  review: string;

  @Column()
  book_id: number;

  @ManyToOne(() => Book)
  @JoinColumn({ name: 'book_id' })
  book: Book
}

export default Comment;
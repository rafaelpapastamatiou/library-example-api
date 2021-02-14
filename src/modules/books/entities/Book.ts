import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm';

import Author from 'modules/authors/entities/Author';
import Comment from '@modules/comments/entities/Comment';

@Entity('books')
class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column('text')
  description: string;

  @Column('date')
  releaseDate: Date;

  @Column('varchar', { length: 13 })
  isbn: string;

  @Column()
  photoUrl: string;

  @OneToMany(() => Author, author => author.book, {
    cascade: true
  })
  authors: Author[];

  @OneToMany(() => Comment, comment => comment.book)
  comments: Comment[];

  commentsCount: number;
}

export default Book;
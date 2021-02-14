import { Repository, getRepository, EntityRepository } from 'typeorm';

import CreateBookDTO from '../dtos/CreateBookDTO';
import UpdateBookDTO from '../dtos/UpdateBookDTO';

import Book from '../entities/Book';

@EntityRepository(Book)
class BooksRepository {
  private repository: Repository<Book>;

  constructor(){
      this.repository = getRepository(Book);
  }

  public async create({ title, description, isbn, releaseDate, photoUrl, authors }: CreateBookDTO): Promise<Book> {
    const book = this.repository.create({
      title,
      description,
      isbn,
      releaseDate,
      photoUrl,
      authors
    })

    await this.repository.save(book);

    return book;
  }

  public async findAll(): Promise<Book[]> {
    let books = await this.repository.find({ relations: ['authors', 'comments'] });
    
    for(let book of books){
      book.commentsCount = book.comments.length
    }

    return books;
  }

  public async findById(id: number): Promise<Book | undefined> {
    let book = await this.repository.findOne({ where: { id }, relations: ['authors', 'comments'] })

    if(book){
      book.commentsCount = book.comments.length
    }

    return book;
  }

  public async update(id: number, { title, description, photoUrl }: UpdateBookDTO): Promise<Book> {
    let book = await this.findById(id)

    if(!book){
      throw new Error('Livro não encontrado.')
    }

    book = {
      ...book,
      title,
      description,
      photoUrl
    }

    await this.repository.save(book);

    return book;
  }

  public async delete(id: number): Promise<void> {
    await this.repository.delete(id)
  }
}

export default BooksRepository;
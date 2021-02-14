import { getCustomRepository } from 'typeorm';

import BooksRepository from '../repositories/BooksRepository';

import Book from "../entities/Book";

import CreateBookDTO from '../dtos/CreateBookDTO';
import UpdateBookDTO from '../dtos/UpdateBookDTO';

export default class BooksService {
  private booksRepository: BooksRepository;

  constructor(){
    this.booksRepository = getCustomRepository(BooksRepository)
  }

  public async listBooks(): Promise<Book[]>{
    const books = await this.booksRepository.findAll()

    return books;
  }

  public async getDetails(id: number): Promise<Book | undefined> {
    const book = await this.booksRepository.findById(id);

    return book;
  }

  public async createBook({title,description,isbn,photoUrl, releaseDate, authors}: CreateBookDTO): Promise<Book>{
    const book = await this.booksRepository.create({ title, description, isbn, photoUrl, releaseDate, authors});

    return book;
  }

  public async updateBook(id: number, { description, photoUrl, title }: UpdateBookDTO): Promise<Book>{
    const bookUpdated = await this.booksRepository.update(id, {description, photoUrl, title});

    return bookUpdated;
  }

  public async deleteBook(id: number): Promise<void> {
    await this.booksRepository.delete(id);
  }
}


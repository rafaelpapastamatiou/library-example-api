import { Request, Response } from 'express';

import BooksService from '../services/BooksService';

export default class BooksController {
  public async index(request: Request, response: Response) {
    const booksService = new BooksService();

    const books = await booksService.listBooks();

    return response.json(books);
  }

  public async show(request: Request, response: Response) {
    const booksService = new BooksService();

    const { id } = request.params

    const book = await booksService.getDetails(Number(id));

    return response.json(book);
  }

  public async create(request: Request, response: Response) {
    const booksService = new BooksService();

    const {title, description, isbn, photoUrl, releaseDate, authors} = request.body

    const book = await booksService.createBook({title, description, isbn, photoUrl, releaseDate, authors});

    return response.json(book);
  }

  public async update(request: Request, response: Response) {
    const booksService = new BooksService();

    const { id } = request.params

    const {title, description, photoUrl} = request.body

    const bookUpdated = await booksService.updateBook(Number(id),{title, description, photoUrl});

    return response.json(bookUpdated);
  }

  public async delete(request: Request, response: Response) {
    const booksService = new BooksService();

    const { id } = request.params

    await booksService.deleteBook(Number(id));

    return response.status(204).send()
  }
};
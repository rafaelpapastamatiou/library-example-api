import { Request, Response } from 'express';

import CommentsService from '../services/CommentsService';

export default class BooksController {
  public async index(request: Request, response: Response) {
    const commentsService = new CommentsService();

    const { book_id } = request.params

    const comments = await commentsService.getCommentsByBook(Number(book_id));

    return response.json(comments);
  }

  public async create(request: Request, response: Response) {
    const commentsService = new CommentsService();

    const { name, review, book_id } = request.body

    const comment = await commentsService.createComment({ name, review, book_id });

    return response.json(comment);
  }
};
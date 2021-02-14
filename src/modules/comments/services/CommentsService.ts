import { getCustomRepository } from 'typeorm';

import CommentsRepository from '../repositories/CommentsRepository';

import Comment from "../entities/Comment";

import CreateCommentDTO from '../dtos/CreateCommentDTO';

export default class BooksService {
  private commentsRepository: CommentsRepository;

  constructor(){
    this.commentsRepository = getCustomRepository(CommentsRepository)
  }

  public async getCommentsByBook(book_id: number): Promise<Comment[]>{
    const comments = await this.commentsRepository.findByBookId(book_id)

    return comments;
  }

  public async getCommentsCountByBook(book_id: number): Promise<number>{
    const commentsCount = await this.commentsRepository.countByBookId(book_id)

    return commentsCount;
  }

  public async createComment({name,review,book_id}: CreateCommentDTO): Promise<Comment>{
    const comment = await this.commentsRepository.create({ name,review,book_id });

    return comment;
  }
}


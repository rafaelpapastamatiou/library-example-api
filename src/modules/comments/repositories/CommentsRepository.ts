import { Repository, getRepository, EntityRepository } from 'typeorm';

import CreateCommentDTO from '../dtos/CreateCommentDTO';

import Comment from '../entities/Comment';

@EntityRepository(Comment)
class CommentsRepository {
  private repository: Repository<Comment>;

  constructor(){
      this.repository = getRepository(Comment);
  }

  public async create({ name, review, book_id }: CreateCommentDTO): Promise<Comment> {
    const comment = this.repository.create({
      name,
      review,
      book_id
    })

    await this.repository.save(comment);

    return comment;
  }

  public async findByBookId(book_id: number): Promise<Comment[]> {
    const comments = await this.repository.find({ where: { book_id } })

    return comments;
  }

  public async countByBookId(book_id: number): Promise<number> {
    const commentsCount = await this.repository.count({ where: { book_id } })
    
    return commentsCount;
  }
}

export default CommentsRepository;
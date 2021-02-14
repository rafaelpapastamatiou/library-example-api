import { Router } from 'express';

import booksRouter from '@modules/books/routes/books.routes'

import commentsRouter from '@modules/comments/routes/comments.routes' 

const routes = Router();

routes.use('/books', booksRouter)

routes.use('/comments', commentsRouter)

export default routes;
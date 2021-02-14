import {Router} from 'express'

import BooksController from '../controllers/BooksController';

const booksRouter = Router();

const booksController = new BooksController();

booksRouter.get('/', booksController.index)

booksRouter.get('/:id', booksController.show)

booksRouter.post('/', booksController.create)

booksRouter.put('/:id', booksController.update)

booksRouter.delete('/:id', booksController.delete)

export default booksRouter
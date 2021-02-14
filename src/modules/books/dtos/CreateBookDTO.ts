import Author from "modules/authors/entities/Author";

export default interface CreateBookDTO{
  title: string;

  description: string;

  releaseDate: Date;

  isbn: string;

  photoUrl: string;

  authors: Author[];
}
import { createAction, props } from '@ngrx/store';
import { Book } from '@api/api-books/api-books.service';

// Add Able books
export const addAbleBooks = createAction('[Able Books] add', props<{ newBook: Book }>())


export const changeBookToReadingListBook = createAction('[Able Books] changeBookToReadingListBook', props<Book>())
export const changeBookToAbleBooks = createAction('[Reading List Books] changeBookToAbleBooks', props<Book>())

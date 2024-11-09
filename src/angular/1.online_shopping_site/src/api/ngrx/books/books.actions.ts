import { createAction, props } from '@ngrx/store';
import { Book } from '@api/api-books/api-books.service';

// Add Able books
export const addAllBooks = createAction('[Able Books] addAllBooks', props<{ books: Book[] }>())

export const changeBookToReadingListBook = createAction('[Able Books] changeBookToReadingListBook', props<Book>())
export const changeBookToAbleBooks = createAction('[Reading List Books] changeBookToAbleBooks', props<Book>())
// export const filterCategoryBooks = createAction('[Filter By Category filterCategoryBooks]', props(<string>()))

import { createAction, props } from '@ngrx/store';
import { Book, ECategories } from '@api/api-books/api-books.service';

// Add Able books
export const addAllBooks = createAction('addAllBooks', props<{ ableBooks: Book[], readingListBooks: Book[] }>())

export const changeBookToReadingListBook = createAction('[Able Books] changeBookToReadingListBook', props<Book>())
export const changeBookToAbleBooks = createAction('[Reading List Books] changeBookToAbleBooks', props<Book>())

export const filterCategoryBooksSelected = createAction('[Filter By Category filterCategoryBooks]', props<{ categorySelected: ECategories | null }>())

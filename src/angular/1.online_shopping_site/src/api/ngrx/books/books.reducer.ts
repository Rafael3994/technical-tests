import { Action, createReducer, on } from '@ngrx/store';
import { addAllBooks, changeBookToAbleBooks, changeBookToReadingListBook, filterCategoryBooksSelected, } from './books.actions';
import { Book, ECategories } from '@api/api-books/api-books.service';

export type TBooksState = { ableBooks: Book[], readingListBooks: Book[], categorySelected: ECategories | null, };
export type TReducerBooksState = { books: TBooksState }
export const initialState: TBooksState =
{
    ableBooks: [],
    readingListBooks: [],
    categorySelected: null
}


const _booksReducer = createReducer(initialState,
    on(addAllBooks, (state, { ableBooks, readingListBooks }) => {
        return {
            ...state,
            ableBooks, readingListBooks
        }
    }),
    on(changeBookToReadingListBook, (state, book) => {
        // remove able book
        // add reading list book
        return {
            ...state,
            ableBooks: state.ableBooks.filter(el => el.ISBN !== book.ISBN),
            readingListBooks: [...state.readingListBooks, book],
        }
    }),
    on(changeBookToAbleBooks, (state, book) => {
        // remove reading list book
        // add able book
        return {
            ...state,
            ableBooks: [...state.ableBooks, book],
            readingListBooks: state.readingListBooks.filter(el => el.ISBN !== book.ISBN),
        }
    }),
    on(filterCategoryBooksSelected, (state, { categorySelected }) => ({ ...state, categorySelected }))
)
export function booksReducer(state: TBooksState | undefined, action: Action<string>) {
    return _booksReducer(state, action);
}
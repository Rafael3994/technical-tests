import { Action, createReducer, on } from '@ngrx/store';
import { addAbleBooks, changeBookToAbleBooks, changeBookToReadingListBook, } from './books.actions';
import { Book } from '@api/api-books/api-books.service';

export const initialState:
    {
        ableBooks: Book[],
        readingListBooks: Book[]
    } =
{
    ableBooks: [],
    readingListBooks: []
}

export type BooksState = { books: { ableBooks: Book[], readingListBooks: Book[] } };

const _booksReducer = createReducer(initialState,
    on(addAbleBooks, (state, { newBook }) => {
        return {
            ...state,
            ableBooks: [...state.ableBooks, newBook]
        }
    }),
    on(changeBookToReadingListBook, (state, book) => {
        // remove able book
        // add reading list book
        return {
            ableBooks: state.ableBooks.filter(el => el.ISBN !== book.ISBN),
            readingListBooks: [...state.readingListBooks, book]
        }
    }),
    on(changeBookToAbleBooks, (state, book) => {
        return {
            ableBooks: [...state.ableBooks, book],
            readingListBooks: state.readingListBooks.filter(el => el.ISBN !== book.ISBN)
        }
    })
)
export function booksReducer(state: { ableBooks: Book[]; readingListBooks: Book[]; } | undefined, action: Action<string>) {
    return _booksReducer(state, action);
}
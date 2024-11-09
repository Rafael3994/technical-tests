import { Action, createReducer, on } from '@ngrx/store';
import { addAllBooks, changeBookToAbleBooks, changeBookToReadingListBook, } from './books.actions';
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
    on(addAllBooks, (state, { books }) => {
        return {
            ...state,
            ableBooks: books
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
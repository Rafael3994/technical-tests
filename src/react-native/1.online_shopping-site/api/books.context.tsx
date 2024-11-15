import { Book } from "@/api/books";
import { createContext, useContext, useEffect, useState } from "react";

export interface BooksContextType {
    state: {
        ableBooks: Book[];
        readingList: Book[];
    };
    setState: React.Dispatch<React.SetStateAction<{
        ableBooks: Book[];
        readingList: Book[];
    }>>;
}

export const BooksContext = createContext<BooksContextType | undefined>(undefined);

export const BooksProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, setState] = useState<{
        ableBooks: Book[];
        readingList: Book[];
    }>({
        ableBooks: [],
        readingList: [],
    });

    return (
        <BooksContext.Provider value={{ state, setState }}>
            {children}
        </BooksContext.Provider>
    );
};

export const useBooksContext = () => {
    const context = useContext(BooksContext);
    if (!context) throw new Error('useBooksContext is undefined');

    const { state, setState } = context;
    const [ableBooksContext, setAbleBooksContext] = useState<Book[]>([])
    const [readingListContext, setReadingListContext] = useState<Book[]>([])

    useEffect(() => {
        setAbleBooksContext(state.ableBooks);
    }, [state.ableBooks]);

    useEffect(() => {
        setReadingListContext(state.readingList);
    }, [state.readingList]);

    const setAbleBooksState = (ableBooks: Book[]) => {
        setState((prevState) => ({ ...prevState, ableBooks }))
    }

    const setReadingBooksState = (readingList: Book[]) => {
        setState((prevState) => ({ ...prevState, readingList }))
    }

    const addBookInReadingBooks = (book: Book) => {
        // Remove book from ableBooks
        setState((prevState) => ({
            ...prevState,
            ableBooks: prevState.ableBooks.filter((el: Book) => book.ISBN !== el.ISBN)
        }));
        // Add book to readingBooks
        setState((prevState) => ({
            ...prevState,
            readingList: [...prevState.readingList, book]
        }));
    }

    const removeBookInReadingBooks = (book: Book) => {
        // Add book from ableBooks
        setState((prevState) => ({
            ...prevState,
            ableBooks: [...prevState.ableBooks, book]
        }));
        // Remove book to readingBooks
        setState((prevState) => ({
            ...prevState,
            readingList: prevState.readingList.filter((el: Book) => book.ISBN !== el.ISBN)
        }));
    }

    return {
        ableBooksContext,
        readingListContext,
        setAbleBooksState,
        setReadingBooksState,
        addBookInReadingBooks,
        removeBookInReadingBooks,
    }
}


import { Book, getAllBooks } from "@/api/books";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import useBooksAsyncStorage from "../asyncStorage/useBooks.localStorage";
import { AppState, AppStateStatus } from "react-native";

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
    const { getBooksFromStorage, setBooksFromStorage } = useBooksAsyncStorage();
    const appState = useRef(AppState.currentState);

    const [state, setState] = useState<{
        ableBooks: Book[];
        readingList: Book[];
    }>({
        ableBooks: [],
        readingList: [],
    });


    useEffect(() => {
        loadData();
    }, [])

    useEffect(() => {
        const handleAppStateChange = (nextAppState: AppStateStatus) => {
            if (appState.current && appState.current !== nextAppState) {
                console.log({ appState: appState.current, nextAppState });
                // background: save data
                if (appState.current === 'inactive' && nextAppState === 'background') {
                    setBooksFromStorage(state.ableBooks, state.readingList);
                }
            }
            appState.current = nextAppState;
        }

        const subscription = AppState.addEventListener('change', handleAppStateChange);

        return () => {
            subscription.remove();
        };

    }, []);

    useEffect(() => {
        if (state.ableBooks.length > 0 || state.readingList.length > 0) {
            setBooksFromStorage(state.ableBooks, state.readingList);
        }
    }, [state])

    const loadData = async () => {
        // get data from AsyncStorage
        const books = await loadDataFromLocalStorage();
        // if has, save it to state
        if (books && (books.ableBooks.length > 0 || books.readingList.length > 0)) {
            setState({ ableBooks: books.ableBooks, readingList: books.readingList })
        } else {
            // if not, get data from API
            // and save it
            const books = getAllBooks();
            setState({ ableBooks: books, readingList: [] })
        }
    }

    const loadDataFromLocalStorage = async () => {
        const books = await getBooksFromStorage();
        return books;
    };

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

        // setBooksFromStorage(state.ableBooks, state.readingList);
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

        // setBooksFromStorage(state.ableBooks, state.readingList);
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


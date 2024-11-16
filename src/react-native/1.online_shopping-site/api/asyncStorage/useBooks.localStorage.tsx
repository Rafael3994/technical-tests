import AsyncStorage from "@react-native-async-storage/async-storage";
import { Book } from "../books";
import { useState } from "react";

export const KEY_BOOKS_STORAGE = 'BOOKS_STORAGE';
export default function useBooksAsyncStorage() {

    // const [ableBooks, setAbleBooks] = useState<Book[]>([]);
    // const [readingList, setReadingList] = useState<Book[]>([]);

    const setBooksFromStorage = async (ableBooks: Book[], readingList: Book[]) => {
        const _storageBooks = JSON.stringify({
            storageBooks: {
                ableBooks,
                readingList,
            }
        });
        try {
            await AsyncStorage.setItem(KEY_BOOKS_STORAGE, _storageBooks);
        } catch (e) {
            console.log('getBooksFromStorage err: ', e);
        }
    }

    const getBooksFromStorage = async (): Promise<{ ableBooks: Book[], readingList: Book[] } | undefined> => {
        try {
            const res = await AsyncStorage.getItem(KEY_BOOKS_STORAGE);
            if (!res) return undefined;
            const _res = JSON.parse(res!).storageBooks;
            return {
                ableBooks: _res.ableBooks,
                readingList: _res.readingList
            }
        } catch (e) {
            console.log('getBooksFromStorage err: ', e);
        }
    }

    return {
        getBooksFromStorage,
        setBooksFromStorage,
    }
}
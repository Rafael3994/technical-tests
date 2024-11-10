import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export enum ECategories {
  "Fantasía" = "Fantasía",
  "Ciencia_ficción" = "Ciencia ficción",
  "Zombies" = "Zombies",
  "Terror" = "Terror"
}

export interface Book {
  title: string;
  pages: number;
  genre: ECategories;
  cover: string;
  synopsis: string;
  year: number;
  ISBN: `${string}-${string}`;
  author: {
    name: string;
    otherBooks: string[];
  };
}

export enum TLocalStorageKeys {
  "ABLE_BOOKS" = "ableBooks",
  "READING_LIST_BOOKS" = "readingListBooks",
}

@Injectable({
  providedIn: 'root'
})
export class ApiBooksService {
  private jsonUrl = './assets/books.json';
  constructor(private http: HttpClient) { }

  getAllBooksFromJSON(): Observable<{ library: { book: Book }[] }> {
    return this.http.get<{ library: { book: Book }[] }>(this.jsonUrl);
  }

  getLocalStorage(): { ableBooks: Book[] | null, readingListBooks: Book[] | null } {
    const ableBooks = window.localStorage.getItem(TLocalStorageKeys.ABLE_BOOKS);
    const readingListBooks = window.localStorage.getItem(TLocalStorageKeys.READING_LIST_BOOKS);
    return {
      ableBooks: ableBooks && JSON.parse(ableBooks),
      readingListBooks: readingListBooks && JSON.parse(readingListBooks)
    }
  }

  setLocalStorege(ableBooks: Book[], readingListBooks: Book[]) {
    window.localStorage.setItem(
      TLocalStorageKeys.ABLE_BOOKS,
      JSON.stringify(ableBooks)
    )
    window.localStorage.setItem(
      TLocalStorageKeys.READING_LIST_BOOKS,
      JSON.stringify(readingListBooks)
    )
  }
}

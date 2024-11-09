import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Book {
  title: string;
  pages: number;
  genre: string;
  cover: string;
  synopsis: string;
  year: number;
  ISBN: string;
  author: {
    name: string;
    otherBooks: string[];
  };
}

@Injectable({
  providedIn: 'root'
})
export class ApiBooksService {
  private jsonUrl = 'assets/books.json';
  constructor(private http: HttpClient) { }

  getAllBooks(): Observable<{ library: { book: Book }[] }> {
    return this.http.get<{ library: { book: Book }[] }>(this.jsonUrl);
  }
}

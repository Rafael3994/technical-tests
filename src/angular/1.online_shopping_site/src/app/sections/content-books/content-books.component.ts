import { Component } from '@angular/core';
import { ApiBooksService, Book } from '../../../api/api-books/api-books.service';
import { CardBooksComponent } from "../../components/card-books/card-books.component";
import { select, Store } from '@ngrx/store';
import { createSelector } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { BooksState } from '@api/ngrx/books/books.reducer';


@Component({
  selector: 'app-content-books',
  standalone: true,
  imports: [CardBooksComponent, CommonModule],
  templateUrl: './content-books.component.html',
  styleUrl: './content-books.component.scss'
})
export class ContentBooksComponent {
  books$: Observable<Book[]>;

  constructor(private store: Store<BooksState>) {
    this.books$ = this.store.pipe(select(state => state.books.ableBooks));
  }

  ngOnInit(): void {
    this.books$.subscribe(books => console.log(books)
    )
  }

}

import { Component } from '@angular/core';
import { BooksState } from '@api/ngrx/books/books.reducer';
import { select, Store } from '@ngrx/store';
import { CardBooksComponent } from "../../components/card-books/card-books.component";
import { Book } from '@api/api-books/api-books.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reading-list',
  standalone: true,
  imports: [CardBooksComponent, CommonModule],
  templateUrl: './reading-list.component.html',
  styleUrl: './reading-list.component.scss'
})
export class ReadingListComponent {
  books$: Observable<Book[]>;

  constructor(private store: Store<BooksState>) {
    this.books$ = this.store.pipe(select(state => state.books.readingListBooks));
  }


}

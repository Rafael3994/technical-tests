import { Component, Input } from '@angular/core';
import { Book } from '@api/api-books/api-books.service';
import { changeBookToAbleBooks, changeBookToReadingListBook } from '@api/ngrx/books/books.actions';
import { TBooksState } from '@api/ngrx/books/books.reducer';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-card-books',
  standalone: true,
  imports: [],
  templateUrl: './card-books.component.html',
  styleUrl: './card-books.component.scss'
})
export class CardBooksComponent {
  @Input() book: Book | undefined;
  @Input() isCanRemove: boolean | undefined = false;

  constructor(private store: Store<TBooksState>) {
  }

  addBookToReadingList(book: Book): void {
    this.store.dispatch(changeBookToReadingListBook(book));
  }

  addBookToAbleBooks(book: Book): void {
    this.store.dispatch(changeBookToAbleBooks(book));
  }

}

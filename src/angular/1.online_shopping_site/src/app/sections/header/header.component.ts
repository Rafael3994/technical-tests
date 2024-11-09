import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Book } from '@api/api-books/api-books.service';
import { BooksState } from '@api/ngrx/books/books.reducer';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  books$: Observable<{ ableBooks: Book[], readingListBooks: Book[] }>

  constructor(private store: Store<BooksState>) {
    this.books$ = this.store.pipe(select(state => state.books))
  }
}

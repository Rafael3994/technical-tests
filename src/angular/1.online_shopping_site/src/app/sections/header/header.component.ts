import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TBooksState, TReducerBooksState } from '@api/ngrx/books/books.reducer';
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
  books$: Observable<TBooksState>
  lengthBooksCategory: number = 0

  constructor(private store: Store<TReducerBooksState>) {
    this.books$ = this.store.pipe(select(state => state.books))
    this.books$.subscribe(({ ableBooks, categorySelected }) => {

      this.lengthBooksCategory = ableBooks.filter(book => book.genre === categorySelected).length
    })
  }
}

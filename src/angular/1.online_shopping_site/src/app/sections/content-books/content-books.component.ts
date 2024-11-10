import { Component } from '@angular/core';
import { ApiBooksService, Book, ECategories } from '../../../api/api-books/api-books.service';
import { CardBooksComponent } from "../../components/card-books/card-books.component";
import { select, Store } from '@ngrx/store';
import { combineLatest, map, Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { TReducerBooksState } from '@api/ngrx/books/books.reducer';
import { filterCategoryBooksSelected } from '@api/ngrx/books/books.actions';


@Component({
  selector: 'app-content-books',
  standalone: true,
  imports: [CardBooksComponent, CommonModule],
  templateUrl: './content-books.component.html',
  styleUrl: './content-books.component.scss'
})
export class ContentBooksComponent {
  books$: Observable<Book[]> = of([]);
  categoriesList: Array<ECategories> = Object.values(ECategories);
  booksToShow: Book[] = [];

  constructor(private store: Store<TReducerBooksState>) { }

  ngOnInit() {
    this.books$ = combineLatest([
      this.store.pipe(select(state => state.books.ableBooks)),
      this.store.pipe(select(state => state.books.categorySelected))
    ]).pipe(
      map(([ableBooks, categorySelected]) => {
        return categorySelected === null
          ? ableBooks
          : ableBooks.filter(book => book.genre === categorySelected);
      })
    );
  }


  handleOnChangeInputSelect(event: Event) {
    const selectInput = event.target as HTMLSelectElement;
    this.store.dispatch(filterCategoryBooksSelected({ categorySelected: selectInput.value === "null" ? null : selectInput.value as ECategories }))
  }
}

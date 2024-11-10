import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./sections/header/header.component";
import { ContentBooksComponent } from "./sections/content-books/content-books.component";
import { ReadingListComponent } from "./sections/reading-list/reading-list.component";
import { ApiBooksService, Book } from '@api/api-books/api-books.service';
import { Store } from '@ngrx/store';
import { addAllBooks } from '@api/ngrx/books/books.actions';
import { TReducerBooksState } from '@api/ngrx/books/books.reducer';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ContentBooksComponent, ReadingListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = '1.online_shopping_site';

  listsBooks$: Observable<{ ableBooks: Book[], readingListBooks: Book[] }> = of()

  constructor(
    private apiBooksService: ApiBooksService,
    private store: Store<TReducerBooksState>
  ) {
    this.listsBooks$ = this.store.select(({ books }) => ({ ableBooks: books.ableBooks, readingListBooks: books.readingListBooks }));
  }

  ngOnInit(): void {
    // Check if I have the info in the localStorage
    const { ableBooks, readingListBooks } = this.apiBooksService.getLocalStorage()

    if (ableBooks !== null && readingListBooks !== null) {
      this.apiBooksService.setLocalStorege(ableBooks, readingListBooks);
      this.store.dispatch(addAllBooks({ ableBooks, readingListBooks }));
    } else {
      this.apiBooksService.getAllBooksFromJSON().subscribe(({ library }) => {
        const ableBooks = library.map(({ book }: { book: Book }) => book);

        this.store.dispatch(addAllBooks({ ableBooks, readingListBooks: [] }));
        this.apiBooksService.setLocalStorege(ableBooks, [])
      });
    }


    this.listsBooks$.subscribe(({ ableBooks, readingListBooks }) => {
      this.apiBooksService.setLocalStorege(ableBooks, readingListBooks);
    });
  }
}

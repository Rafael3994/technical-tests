import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./sections/header/header.component";
import { ContentBooksComponent } from "./sections/content-books/content-books.component";
import { ReadingListComponent } from "./sections/reading-list/reading-list.component";
import { ApiBooksService } from '@api/api-books/api-books.service';
import { Store } from '@ngrx/store';
import { addAbleBooks } from '@api/ngrx/books/books.actions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ContentBooksComponent, ReadingListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = '1.online_shopping_site';

  constructor(
    private apiBooksService: ApiBooksService,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.apiBooksService.getAllBooks().subscribe(({ library }) => {
      library.forEach(({ book }) => this.store.dispatch(addAbleBooks({ newBook: book })));
    });
  }
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./sections/header/header.component";
import { ContentBooksComponent } from "./sections/content-books/content-books.component";
import { ReadingListComponent } from "./sections/reading-list/reading-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ContentBooksComponent, ReadingListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = '1.online_shopping_site';
}

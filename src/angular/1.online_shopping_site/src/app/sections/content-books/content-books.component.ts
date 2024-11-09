import { Component } from '@angular/core';
import { ApiBooksService, Book } from '../../services/api-books/api-books.service';
import { CardBooksComponent } from "../../components/card-books/card-books.component";

@Component({
  selector: 'app-content-books',
  standalone: true,
  imports: [CardBooksComponent],
  templateUrl: './content-books.component.html',
  styleUrl: './content-books.component.scss'
})
export class ContentBooksComponent {
  booksToShow: Book[] = [];
  constructor(private apiBooksService: ApiBooksService) { }

  ngOnInit(): void {
    this.apiBooksService.getAllBooks().subscribe(({ library }) => {
      this.booksToShow = library.map(el => el.book);
    });
  }


}

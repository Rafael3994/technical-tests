import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-books',
  standalone: true,
  imports: [],
  templateUrl: './card-books.component.html',
  styleUrl: './card-books.component.scss'
})
export class CardBooksComponent {
  @Input() book: any;

  constructor() {
    console.log(this.book);

  }

}

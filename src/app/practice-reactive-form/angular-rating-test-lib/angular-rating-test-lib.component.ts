import { Component, OnInit } from '@angular/core';
export class Book { rating!: number }
@Component({
  selector: 'app-angular-rating-test-lib',
  templateUrl: './angular-rating-test-lib.component.html',
  styleUrls: ['./angular-rating-test-lib.component.scss']
})
export class AngularRatingTestLibComponent implements OnInit {
  book: Book = new Book();
  constructor() {

  }

  ngOnInit(): void {
    this.book.rating = 1;
  }
  changeRating(event: any, book: Book) {
    this.book.rating = event;
    console.log(event, book)
  }
}

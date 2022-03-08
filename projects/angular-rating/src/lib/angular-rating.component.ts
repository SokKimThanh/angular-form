import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-angular-rating',
  templateUrl: "./angular-rating.component.html",
  styleUrls: ['./angular-rating.component.scss'
  ]
})
export class AngularRatingComponent implements OnInit {
  @Output() ratingChange = new EventEmitter();
  @Input() rating = 0;
  @Input() count = 0;

  options = [0];
  constructor() { }

  ngOnInit(): void {
    this.options = Array.from({ length: this.count }, (v, k) => ++k);
  }
  changeRating(rating: any) {
    this.ratingChange.emit(rating);
  }
}

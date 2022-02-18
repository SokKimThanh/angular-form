import { market, MARKETS } from './markets';
import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-mat-select-custom',
  templateUrl: './mat-select-custom.component.html',
  styleUrls: ['./mat-select-custom.component.scss']
})
export class MatSelectCustomComponent implements OnInit {
  markets: market[] = MARKETS;
  currentMarket!: market;

  constructor() {
    this.currentMarket = this.markets[3];
  }

  ngOnInit(): void {
  }
  onMarketChange(event: MatSelectChange) {
    this.currentMarket = <market>this.markets.find(market => market.code === event.value);
  }
}

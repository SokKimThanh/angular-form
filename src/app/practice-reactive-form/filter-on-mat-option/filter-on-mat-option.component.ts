import { Component, OnInit } from '@angular/core';
export interface Variables {
  id: number, name: string
}
@Component({
  selector: 'app-filter-on-mat-option',
  templateUrl: './filter-on-mat-option.component.html',
  styleUrls: ['./filter-on-mat-option.component.scss']
})
export class FilterOnMatOptionComponent implements OnInit {
  variables: Variables[] = [];
  filteredVariables = [{}];
  showInputNameOnly: boolean;
  constructor() {
    for (let i = 0; i <= 100; i++) {
      this.variables.push({ id: i, name: `option${i}` })
    }
    this.showInputNameOnly = true;
  }

  ngOnInit(): void {
    this.filteredVariables = this.variables.slice();
  }
  anotherArray = this.variables;

  getSubtier(value: any): void {
    console.log(value);
  }
}

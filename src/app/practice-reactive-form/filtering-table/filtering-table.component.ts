import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-filtering-table',
  templateUrl: './filtering-table.component.html',
  styleUrls: ['./filtering-table.component.scss']
})
export class FilteringTableComponent implements OnInit {
  people = [
    {
      name: 'John',
      id: 1,
      colour: 'Green',
      pet: 'Dog'
    },
    {
      name: 'Sarah',
      id: 2,
      colour: 'Purple',
      pet: 'Cat'
    },
    {
      name: 'Lindsay',
      id: 3,
      colour: 'Blue',
      pet: 'Lizard'
    },
    {
      name: 'Megan',
      id: 4,
      colour: 'Orange',
      pet: 'Dog'
    }
  ];

  nameFilter = new FormControl('');
  idFilter = new FormControl('');
  colourFilter = new FormControl('');
  petFilter = new FormControl('');
  dataSource = new MatTableDataSource();
  columnsToDisplay = ['name', 'id', 'favouriteColour', 'pet'];
  filterValues = {
    name: '',
    id: '',
    colour: '',
    pet: ''
  };

  constructor() {
    this.dataSource.data = this.people;
    this.dataSource.filterPredicate = this.createFilter();
  }

  ngOnInit() {
    this.nameFilter.valueChanges
      .subscribe(
        (name: string) => {
          this.filterValues.name = name;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )
    this.idFilter.valueChanges
      .subscribe(
        (id: string) => {
          this.filterValues.id = id;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )
    this.colourFilter.valueChanges
      .subscribe(
        (colour: string) => {
          this.filterValues.colour = colour;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )
    this.petFilter.valueChanges
      .subscribe(
        (pet: string) => {
          this.filterValues.pet = pet;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )
  }

  createFilter(): (data: any, filter: string) => boolean {
    let filterFunction = function (data: { name: string; id: { toString: () => string; }; colour: string; pet: string; }, filter: string): boolean {
      let searchTerms = JSON.parse(filter);
      return data.name.toLowerCase().indexOf(searchTerms.name) !== -1
        && data.id.toString().toLowerCase().indexOf(searchTerms.id) !== -1
        && data.colour.toLowerCase().indexOf(searchTerms.colour) !== -1
        && data.pet.toLowerCase().indexOf(searchTerms.pet) !== -1;
    }
    return filterFunction;
  }
}

import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { SelectionModel } from '@angular/cdk/collections';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-filtering-table',
  templateUrl: './filtering-table.component.html',
  styleUrls: ['./filtering-table.component.scss']
})
export class FilteringTableComponent implements OnInit {
  /* ================================================================= */
  /* KHU VUC THIET LAP FORM MODEL */
  /* ================================================================= */
  autocompleteForm!: FormGroup;
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
  tableCols = [
    { key: 'name', display: 'name' },
    { key: 'colour', display: 'favouriteColour' },
    { key: 'id', display: 'id' },
    { key: 'pet', display: 'pet' }
  ]
  get keys() { return this.tableCols.map(({ key }) => key); }
  selection = new SelectionModel<any>(true, []);
  @Output('outSelectedRow') outSelectedRow = new EventEmitter<any>();
  inputFilterList!: string;
  onSelectedRow(selectedRow: any): void {
    this.selection.clear();
    this.selection.toggle(selectedRow);
    this.outSelectedRow.emit(selectedRow);
  }

  dataSource = new MatTableDataSource();
  filterValues = {
    name: '',
    id: '',
    colour: '',
    pet: ''
  };

  constructor(private fb: FormBuilder) {
    this.autocompleteForm = this.fb.group({
      name: '',
      id: '',
      colour: '',
      pet: '',
    })
    this.dataSource.data = this.people;
    this.dataSource.filterPredicate = this.createFilter();
  }

  ngOnInit() {
    this.autocompleteForm.get('name')?.valueChanges
      .subscribe(
        (name: string) => {
          this.filterValues.name = name;
          this.inputFilterList = name;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )
    this.autocompleteForm.get('id')?.valueChanges
      .subscribe(
        (id: string) => {
          this.filterValues.id = id;
          this.inputFilterList = id;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )
    this.autocompleteForm.get('colour')?.valueChanges
      .subscribe(
        (colour: string) => {
          this.filterValues.colour = colour;
          this.inputFilterList = colour;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )
    this.autocompleteForm.get('pet')?.valueChanges
      .subscribe(
        (pet: string) => {
          this.filterValues.pet = pet;
          this.inputFilterList = pet;
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
  showBooleanClass(column: any): any {
    let result = '';
    if (column.isClass) {
      if (column.isArrayClass) {
        for (const key of column.class) {
          result += key ? `${key ? key : ''},` : `${key ? key : ''},`.substring(0, result.length - 1);
        }
        return result.substring(0, result.length - 1);
      }
      else {
        result = column.class;
        return result;
      }
    }
    if (column.config && column.config.isClass) {
      if (column.config.isArrayClass) {
        for (const key of column.config.class) {
          result += key ? `${key ? key : ''},` : `${key ? key : ''},`.substring(0, result.length - 1);
        }
        return result.substring(0, result.length - 1);
      }
      else {
        result = column.config.class;
        return result;
      }
    }
  }
}

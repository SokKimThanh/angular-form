
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
interface Food {
  value: string;
  viewValue: string;
}

interface Car {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-autocomplete-reactive-form',
  templateUrl: './autocomplete-reactive-form.component.html',
  styleUrls: ['./autocomplete-reactive-form.component.scss']
})
export class AutocompleteReactiveFormComponent implements OnInit {

  /* ================================================================= */
  /* KHU VUC THIET LAP FORM MODEL */
  /* ================================================================= */
  autocompleteForm!: FormGroup;
  /* data */
  foods!: Food[];
  foodsFilter!: Food[];
  /* split control of form model */
  timKiemTuongDoi!: string;
  displayedColumns: string[] = ['value', 'viewValue'];
  dataSource!: any;
  selectTriggerRow!: any;
  /* ================================================================= */
  //  CONSTRUCTOR
  /* ================================================================= */
  constructor(
    private fb: FormBuilder,
  ) {
    /* tạo dữ liệu giả */
    this.foods = [
      { value: 'steak-0', viewValue: 'Steak' },
      { value: 'pizza-1', viewValue: 'Pizza' },
      { value: 'tacos-2', viewValue: 'Tacos' }
    ];
    this.foodsFilter = this.foods.slice();
    /* tạo bảng dữ liệu giả để test thử  */
    this.dataSource = new MatTableDataSource(this.foods);
  }
  /* ================================================================= */
  //  FUNCTION
  /* ================================================================= */
  onEnterInputSearch(): void {
    if (!this.timKiemTuongDoi) {
      this.dataSource.filter = '';
      this.timKiemTuongDoi = '';
      return;
    }
    /* nhấn tab lấy kết quả */
    this.dataSource.filter = this.timKiemTuongDoi;
    const foodsFilter = this.dataSource.filteredData[0];
    this.foodsFilter = this.dataSource.filteredData;
    // reload lai danh sách filter
    this.autocompleteForm.get('selectControl')?.patchValue(foodsFilter);
    // test form control
    // console.log(this.autocompleteForm);
  }
  clearInputSearch(): void {
    this.autocompleteForm.reset();
  }
  public isFiltered(foodFiltering: Food) {
    return this.foodsFilter.find(foodFinding => foodFinding.value.includes(foodFiltering.value));
  }
  ngOnInit(): void {

    /* init form controls of form group of form model */
    this.autocompleteForm = this.fb.group({
      selectControl: [this.foods[0].value],
      inputSearchControl: [''],
    })
    /* watching value changes when init component */
    this.autocompleteForm.get('inputSearchControl')?.valueChanges.subscribe(inputing => {
      if (!inputing) {
        return;
      }
      this.timKiemTuongDoi = inputing;
    });
    this.autocompleteForm.get('selectControl')?.valueChanges.subscribe(selecting => {
      if (!selecting) {
        return;
      }
      this.selectTriggerRow = selecting;
    });
  }
}

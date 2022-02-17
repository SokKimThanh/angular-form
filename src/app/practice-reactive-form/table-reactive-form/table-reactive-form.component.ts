import { Component, OnInit } from '@angular/core'; // component stuff

import { FormGroup, FormBuilder, FormArray } from "@angular/forms"; // forms stuff


@Component({
  selector: 'table-example',
  templateUrl: './table-reactive-form.component.html'
})
export class TableReactiveFormComponent implements OnInit {
  public invoiceForm!: FormGroup;
  constructor(private _fb: FormBuilder) { }
  ngOnInit() {
    this.invoiceForm = this._fb.group({
      Rows: this._fb.array([this.initRows()])
    });
  }

  get formArr() {
    return this.invoiceForm.get("Rows") as FormArray;
  }

  initRows() {
    return this._fb.group({
      name: [""]
    });
  }

  addNewRow() {
    this.formArr.push(this.initRows());
  }

  deleteRow(index: number) {
    this.formArr.removeAt(index);
  }

} 
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
export interface Customer {
  id: number,
  name: string
}
export class Customer {
}

@Component({
  selector: 'app-practice-reactive-form',
  templateUrl: './practice-reactive-form.component.html',
  styleUrls: ['./practice-reactive-form.component.scss']
})
export class PracticeReactiveFormComponent implements OnInit {
  customer: Customer = new Customer();
  customerForm!: FormGroup;
  title!: string;
  model!: any;
  list!: any;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.customerForm = this.fb.group({
      firstName: '',
      lastName: '',
      email: '',
      sendCatalog: false,
      selectControl: [Customer]
    })
    // this.customerForm = new FormGroup({
    //   firstName: new FormControl(),
    //   lastName: new FormControl(),
    //   email: new FormControl(),
    //   sendCatalog: new FormControl(true)
    // });
  }
  populateTestData(): void {
    this.customerForm.patchValue({
      firstName: 'Sok',
      lastName: 'Thanh Kim',
      email: 'thanhsk1991@gmail.com',
      sendCatalog: false,
      selectControl: [
        { id: 1, name: 'thanh' }
      ]
    })
  }
  save(): void {
    console.log(this.customerForm);
  }
}

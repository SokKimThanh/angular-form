import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
  constructor() { }

  ngOnInit(): void {
    this.customerForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
    });
  }

}

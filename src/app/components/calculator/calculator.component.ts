import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
// import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  calcForm: FormGroup;
  loanAmount: number;
  interestRate: number;
  constructor() {}

  ngOnInit() {
    this.calcForm = new FormGroup({
      loanAmount: new FormControl('30000'),
      interestRate: new FormControl('3.92'),
      morgPeriod: new FormControl('20')
    });

    this.calcForm.valueChanges.subscribe((value) => this.onSubmit());
  }

  onSubmit() {
    this.loanAmount = this.calcForm.value.loanAmount;
    this.interestRate = this.calcForm.value.interestRate;
    console.log(this.loanAmount * this.interestRate);
  }
}

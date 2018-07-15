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
  numPayments: number;
  monthlyPayment: number = 1418;
  totalPaid: number = 510640;
  constructor() {}

  ngOnInit() {
    this.calcForm = new FormGroup({
      loanAmount: new FormControl('300000'),
      interestRate: new FormControl('3.92'),
      morgPeriod: new FormControl('30'),
      monthlyPayment: new FormControl('1418')
    });

    this.calcForm.valueChanges.subscribe((value) => this.onSubmit());
  }

  onSubmit() {
    this.loanAmount = this.calcForm.value.loanAmount;
    this.interestRate = this.calcForm.value.interestRate / 100 / 12;
    this.numPayments = this.calcForm.value.morgPeriod * 12;
    this.monthlyPayment = Math.round(
      this.loanAmount *
        ((this.interestRate * (1 + this.interestRate) ** this.numPayments) /
          ((1 + this.interestRate) ** this.numPayments - 1))
    );
    this.totalPaid = Math.round(
      this.loanAmount *
        ((this.interestRate * (1 + this.interestRate) ** this.numPayments) /
          ((1 + this.interestRate) ** this.numPayments - 1)) *
        this.numPayments
    );
    console.log(this.monthlyPayment);
  }
}

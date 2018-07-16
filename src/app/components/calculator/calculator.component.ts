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
  calcForm2: FormGroup;
  loanAmount: number;
  interestRate: number;
  interestRate2: number;
  numPayments: number;
  numPayments2: number;
  maxPayment: number;
  monthlyPayment: number = 1418;
  totalPaid: number = 510640;
  maxLoan: number = 300000;
  constructor() {}

  ngOnInit() {
    this.calcForm = new FormGroup({
      loanAmount: new FormControl('300000'),
      interestRate: new FormControl('3.92'),
      morgPeriod: new FormControl('30')
    });
    this.calcForm2 = new FormGroup({
      interestRate2: new FormControl('3.92'),
      morgPeriod2: new FormControl('30'),
      maxPayment: new FormControl('1418')
    });

    this.calcForm.valueChanges.subscribe((value) => this.onSubmit());
    this.calcForm2.valueChanges.subscribe((value) => this.onSubmit2());
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
  }
  onSubmit2() {
    this.interestRate2 = this.calcForm2.value.interestRate2 / 100 / 12;
    this.numPayments2 = this.calcForm2.value.morgPeriod2 * 12;
    this.maxPayment = this.calcForm2.value.maxPayment;
    this.maxLoan = Math.round(
      (this.maxPayment * ((1 + this.interestRate2) ** this.numPayments2 - 1)) /
        (this.interestRate2 * (1 + this.interestRate2) ** this.numPayments2)
    );
  }
}

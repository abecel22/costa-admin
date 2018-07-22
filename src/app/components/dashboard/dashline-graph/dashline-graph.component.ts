import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashline-graph',
  templateUrl: './dashline-graph.component.html',
  styleUrls: ['./dashline-graph.component.css']
})
export class DashlineGraphComponent implements OnInit {
  chart: any = [];

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.createChart();
    }, 300);
  }

  createChart() {
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
          {
            data: [2023, 4044, 3663, 5552, 4200, 6180],
            borderColor: '#3cba9f',
            backgroundColor: 'rgba(0,131,143 ,.4)',
            label: '2018',
            fill: true
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Loans Graph',
          fontSize: 18,
          padding: 20
        },
        legend: {
          display: false
        },
        scales: {
          xAxes: [
            {
              display: true
            }
          ],
          yAxes: [
            {
              display: true
            }
          ]
        }
      }
    });
  }
}

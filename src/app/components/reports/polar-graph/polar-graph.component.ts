import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-polar-graph',
  templateUrl: './polar-graph.component.html',
  styleUrls: ['./polar-graph.component.css']
})
export class PolarGraphComponent implements OnInit {
  chart: any = [];
  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.createChart();
    }, 300);
  }

  createChart() {
    this.chart = new Chart('canvas4', {
      type: 'polarArea',
      data: {
        datasets: [
          {
            data: [40, 120, 68, 100],
            backgroundColor: ['#3cba9f', '#ffcc00', '#608EF2', '#FF5A5E']
          }
        ],
        labels: ['Commercial', 'Residential', 'Investments', 'Auto Loans']
      },
      options: {
        title: {
          display: true,
          text: 'Profit Chart',
          fontSize: 18,
          padding: 20
        },
        legend: {
          display: true,
          position: 'bottom'
        }
      }
    });
  }
}

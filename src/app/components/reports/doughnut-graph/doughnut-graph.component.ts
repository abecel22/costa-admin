import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-doughnut-graph',
  templateUrl: './doughnut-graph.component.html',
  styleUrls: ['./doughnut-graph.component.css']
})
export class DoughnutGraphComponent implements OnInit {
  chart: any = [];
  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.createChart();
    }, 300);
  }
  createChart() {
    this.chart = new Chart('canvas3', {
      type: 'doughnut',
      data: {
        datasets: [
          {
            data: [20, 40, 60, 35],
            backgroundColor: ['#3cba9f', '#ffcc00', '#608EF2', '#FF5A5E']
          }
        ],
        labels: ['Austin', 'Dallas', 'Houston', 'San Antonio']
      },
      options: {
        title: {
          display: true,
          text: 'Region Chart',
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

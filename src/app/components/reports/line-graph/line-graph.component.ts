import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-line-graph',
  templateUrl: './line-graph.component.html',
  styleUrls: ['./line-graph.component.css']
})
export class LineGraphComponent implements OnInit {
  chart = [];
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
            data: [20, 40, 60, 35, 90, 120],
            borderColor: '#3cba9f',
            label: '2017',
            fill: false
          },
          {
            data: [70, 30, 140, 110, 180, 190],
            borderColor: '#ffcc00',
            label: '2018',
            fill: false
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'ROI Chart',
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

import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.css']
})
export class BarGraphComponent implements OnInit {
  chart: any = [];

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.createChart();
    }, 300);
  }

  createChart() {
    this.chart = new Chart('canvas2', {
      type: 'horizontalBar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
          {
            data: [120, 50, 60, 180, 90, 120],
            backgroundColor: 'rgba(255, 110, 64, 0.6)',
            borderColor: 'rgb(255, 110, 64)',
            borderWidth: 2,
            label: '2017',
            fill: false
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Leads Graph',
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

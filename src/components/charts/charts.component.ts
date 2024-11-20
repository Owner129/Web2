import { Component } from '@angular/core';
import {BaseChartDirective} from "ng2-charts";
import {Chart, registerables} from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-charts',
  standalone: true,
    imports: [
        BaseChartDirective
    ],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.css'
})
export class ChartsComponent {
  public doughnutChartLabels: string[] = ['USA', 'Canada', 'Germany', 'UK', 'France'];
  public doughnutChartData: number[] = [300, 200, 100, 400, 500];
  public doughnutChartType: string = 'doughnut';
  // @ts-ignore
  public doughnutChartOptions: any = {
    responsive: true,
    cutout: '70%',
    plugins: {
      legend: {
        // display: false
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem: {
            dataIndex: string | number;
            raw: any;
            //@ts-ignore
          }) => `${this.doughnutChartLabels[tooltipItem.dataIndex]}: ${tooltipItem.raw}`
        }
      }
    }
  };
  public lineChartLabels: number[] = [25, 50, 75, 100, 125, 150, 175, 200, 225, 250];
  public lineChartData: any[] = [
    {
      data: [10, 20, 30, 40, 60, 30, 20, 10, 5, 0],
      label: 'Orders',
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      fill: true
    },
    {
      data: [5, 15, 25, 35, 50, 40, 30, 20, 10, 5],
      label: 'Sales',
      borderColor: 'rgba(153, 102, 255, 1)',
      backgroundColor: 'rgba(153, 102, 255, 0.2)',
      fill: true
    }
  ];
  public lineChartOptions: any = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Value'
        }
      }
    },
    plugins: {
      legend: {
        display: true,
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem: any) => `${tooltipItem.dataset.label}: ${tooltipItem.raw}`
        }
      }
    }
  };

}

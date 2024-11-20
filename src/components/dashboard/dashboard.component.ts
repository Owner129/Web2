import {Component} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {ResponsiveTableComponent} from '../responsive-table/responsive-table.component';
import {ChartsComponent} from '../charts/charts.component';
import {BaseChartDirective} from 'ng2-charts';
import {StatisticsComponent} from '../statistics/statistics.component';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    NgOptimizedImage,
    ResponsiveTableComponent,
    ChartsComponent,
    BaseChartDirective,
    StatisticsComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  public areaChartLabels: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public areaChartData: any[] = [
    {data: [40, 30, 20, 50, 60, 70, 80], label: 'Consulting', backgroundColor: 'rgba(75, 192, 192, 0.6)',fill:true},
    {data: [30, 20, 50, 70, 60, 80, 90], label: 'Online Tutorials', backgroundColor: 'rgba(153, 102, 255, 0.6)',fill:true},
    {data: [20, 30, 40, 50, 60, 70, 80], label: 'EDU Management', backgroundColor: 'rgba(255, 99, 132, 0.6)',fill:true}
  ];
  public areaChartOptions: any = {
    responsive: true,
    scales: {
      x: {
        stacked: true,
        title: {
          display: true,
          text: 'Months'
        }
      },
      y: {
        stacked: true,
        title: {
          display: true,
          text: 'Values'
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
  }
}

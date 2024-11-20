import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {DashboardComponent} from '../../components/dashboard/dashboard.component';
import {RightTabComponent} from '../../components/right-tab/right-tab.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgOptimizedImage,
    DashboardComponent,
    RightTabComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

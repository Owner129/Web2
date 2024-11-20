import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-right-tab',
  standalone: true,
    imports: [
        NgOptimizedImage
    ],
  templateUrl: './right-tab.component.html',
  styleUrl: './right-tab.component.css'
})
export class RightTabComponent {

}

import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { FormsModule } from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';
import {MatInput, MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-responsive-table',
  templateUrl: './responsive-table.component.html',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    NgIf,
    MatFormField,
    MatInput,
    MatFormFieldModule,
    MatInputModule
  ],
  styleUrls: ['./responsive-table.component.css']
})
export class ResponsiveTableComponent implements OnInit {
  tasks: any[] = [];
  searchTerm: string = '';
  selectedStatus: string = '';
  sortDirection: 'asc' | 'desc' = 'asc'; // Added sort direction state

  constructor(private service: ServiceService) {}

  ngOnInit() {
    this.service.getData().subscribe(data => {
      this.tasks = data;
    });
  }

  // Filtered and sorted tasks
  filteredTasks() {
    const filtered = this.tasks.filter(task => {
      const matchesName = task.name.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesStatus = this.selectedStatus ? task.status === this.selectedStatus : true;
      return matchesName && matchesStatus;
    });

    return this.sortTasks(filtered);
  }

  // Sorting function for date
  sortTasks(tasks: any[]) {
    return tasks.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return this.sortDirection === 'asc' ? dateA.getTime() - dateB.getTime() : dateB.getTime() - dateA.getTime();
    });
  }

  // Toggle sort direction and sort tasks by date
  sortTasksByDate() {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
  }
}

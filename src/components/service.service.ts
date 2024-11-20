import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

interface Task {
  name: string;
  task: string;
  date: string;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private dataUrl = 'assets/table.json';

  constructor(private http: HttpClient) { }

  getData(): Observable<Task[]> {
    // Симуляція затримки для імітації отримання даних із сервера
    return this.http.get<Task[]>(this.dataUrl).pipe(delay(1000));
  }
}

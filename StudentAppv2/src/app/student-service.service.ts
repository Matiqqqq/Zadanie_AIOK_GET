import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface Student {
  studentId: string;
  name: string;
  age: number;
  major: string;
}
@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private apiUrl = 'http://localhost:7777/students';

  constructor(private http: HttpClient) {}

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.apiUrl);
  }
  
}

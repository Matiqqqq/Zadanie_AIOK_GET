import { Component } from '@angular/core';
import { StudentService } from '../student-service.service';
import { CommonModule } from '@angular/common';

export interface Student {
  studentId: string;
  name: string;
  age: number;
  major: string;
}


@Component({
  selector: 'app-student-list',
  imports: [CommonModule],
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent {
  students: Student[] = [];

  constructor(private studentService: StudentService) {
    // Pobieranie danych z serwisu w konstruktorze
    this.studentService.getStudents().subscribe((students) => {
      this.students = students;
      console.log(this.students); // Debugging
    });
  }
}

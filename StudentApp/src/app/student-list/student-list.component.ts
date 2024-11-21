import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-student-list',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit {

  httpClient = inject(HttpClient);
  data: any = [];
  ngOnInit(): void {
    this.fetchData();
  }
  
    fetchData(){
      this.httpClient
      .get('http://localhost:7777/students')
      .subscribe((data: any) => {
      console.log(data);
      this.data = data;
    });
    }
  
}



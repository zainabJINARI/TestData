import { Component, inject } from '@angular/core';
import { StudentServiceDataService } from '../services/student-service-data.service';
import { StudentInfo } from '../interfaces/student-info';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-body-card',
  standalone: true,
  imports: [],
  templateUrl: './body-card.component.html',
  styleUrl: './body-card.component.css'
})
export class BodyCardComponent {
  student: StudentInfo | null = null;

  constructor(private studentService: StudentServiceDataService) {}

  ngOnInit() {
      this.studentService.student$.subscribe((student: any) => {
          this.student = student;
      });
  }

}

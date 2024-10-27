import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StudentInfo } from '../interfaces/student-info';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceDataService {
  private studentInfo = new BehaviorSubject<StudentInfo | null>(null);


  student$ = this.studentInfo.asObservable();

  constructor() {}

  setStudentInfo(info: StudentInfo) {
    this.studentInfo.next(info);
  }
}

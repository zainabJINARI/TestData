import { Component, inject, Output } from '@angular/core';
import { StudentServiceDataService } from '../services/student-service-data.service';
import { StudentInfo } from '../interfaces/student-info';
import { FormsModule } from '@angular/forms';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  private serviceStudentInfo:StudentServiceDataService = inject(StudentServiceDataService)
  student: StudentInfo = {
    fullName: '',
    schoolName: 'EIDIA',
    studentId: 0,
    personnalBankId:""
  };


  @Output() submit: EventEmitter<any> = new EventEmitter<any>(); // Correctly typed as number
  
CreateCard() {
  console.log('click')

  this.serviceStudentInfo.setStudentInfo(this.student)
  this.student={
    fullName: '',
    schoolName: 'EIDIA',
    studentId: 0,
    personnalBankId:""
  }
  
  this.submit.emit(); // Emit the studentId when the card is created

}

}

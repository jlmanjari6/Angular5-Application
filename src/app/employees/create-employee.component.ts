import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  fullName: string;
  email: string;
  gender: string;
  phone: string;
  contactPreference: string;
  isActive: boolean;
  department: string;
  dob:Date;

  constructor() { }

  ngOnInit(): void {
  }

  saveEmployee(empForm: NgForm): void {
    console.log(empForm.value);
  }
}

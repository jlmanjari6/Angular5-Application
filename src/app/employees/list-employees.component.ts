import { Employee } from './../models/employee.model';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employees: Employee[] = [
    {
      id: 1,
      name: "Akshay",
      gender: "Male",
      email: "akshay@gmail.com",
      phoneNumber: "123",
      contactPreference: "Phone",
      dateOfBirth: new Date('1/1/1991'),
      department: "IT",
      isActive: true,
      photoPath: "assets/images/Akshay.png"
    },
    {
      id: 2,
      name: "Deepthi",
      gender: "Female",
      email: "deepu@gmail.com",
      phoneNumber: "234",
      contactPreference: "Email",
      dateOfBirth: new Date('1/1/1997'),
      department: "ECE",
      isActive: false,
      photoPath: "assets/images/Deepthi.png"
    },
    {
      id: 3,
      name: "Diggu",
      gender: "Male",
      email: "diggu@gmail.com",
      phoneNumber: "132",
      contactPreference: "Phone",
      dateOfBirth: new Date('2/3/1991'),
      department: "CIVIL",
      isActive: false,
      photoPath: "assets/images/Diggu.png"
    },
    {
      id: 4,
      name: "Kukku",
      gender: "Male",
      email: "kukku@gmail.com",
      phoneNumber: "342",
      contactPreference: "Email",
      dateOfBirth: new Date('1/12/1996'),
      department: "CSE",
      isActive: true,
      photoPath: "assets/images/Kukku.png"
    },
    {
      id: 5,
      name: "Manju",
      gender: "Female",
      email: "manju@gmail.com",
      phoneNumber: "453",
      contactPreference: "Phone",
      dateOfBirth: new Date('1/2/1992'),
      department: "IT",
      isActive: true,
      photoPath: "assets/images/Manju.png"
    },
    {
      id: 6,
      name: "Praveen",
      gender: "Male",
      email: "praveen@gmail.com",
      phoneNumber: "363",
      contactPreference: "Phone",
      dateOfBirth: new Date('12/1/1988'),
      department: "Mechanical",
      isActive: true,
      photoPath: "assets/images/Praveen.png"
    },
    {
      id: 7,
      name: "Sampark",
      gender: "Male",
      email: "sampark@gmail.com",
      phoneNumber: "243",
      contactPreference: "Email",
      dateOfBirth: new Date('8/1/1994'),
      department: "IT",
      isActive: true,
      photoPath: "assets/images/Sampark.png"
    },
    {
      id: 8,
      name: "Surabhi",
      gender: "Female",
      email: "surabhi@gmail.com",
      phoneNumber: "674",
      contactPreference: "Phone",
      dateOfBirth: new Date('1/5/1995'),
      department: "Botony",
      isActive: false,
      photoPath: "assets/images/Surabhi.png"
    },
    {
      id: 9,
      name: "Sush",
      gender: "Female",
      email: "sush@gmail.com",
      phoneNumber: "332",
      contactPreference: "Phone",
      dateOfBirth: new Date('3/3/1993'),
      department: "Arts",
      isActive: true,
      photoPath: "assets/images/Sush.png"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

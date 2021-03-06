import { Component } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})

export class CourseComponent {
  key: string;
  code: string;
  name: string;
  year: number;
  credits: number;
  semester: number[];
  faculty: string;
  lecturer: string;
  officeHours: string;
  officeLocation: string;
  prerequiste: string;
  department: string;
  description: string;

  constructor(
    code: string,
    name: string,
    year: number,
    credits: number,
    semester: number[],
    faculty: string,
    lecturer: string,
    officeHours: string,
    officeLocation: string,
    prerequiste: string,
    department: string,
    description: string) {
      this.code = code;
      this.name = name;
      this.year = year;
      this.credits = credits;
      this.semester = semester;
      this.faculty = faculty;
      this.lecturer = lecturer;
      this.officeHours = officeHours;
      this.officeLocation = officeLocation;
      this.prerequiste = prerequiste;
      this.department = department;
      this.description = description;
    }
}

import { FormatWidth } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit{
  studForm!:FormGroup;
  constructor(private fb:FormBuilder){}
  ngOnInit(): void {
    this.studForm = this.fb.group({
    employees:this.fb.array([])}
    );
  }
  students():FormArray{
    return this.studForm.get("students") as FormArray;
  }
  newStudent():FormGroup{
    return this.fb.group({
         fullName:'',
         age:'',
         marks:this.fb.array([])
    });
  }
  addStudent(){
    this.students().push(this.newStudent());
  }
  removeStud(stuIndex:number){
    this.students().removeAt(stuIndex);
  }
  studMarks(stuIndex:number):FormArray{
    return this.students().at(stuIndex).get("marks") as FormArray;
  }
  newMarks():FormGroup{
    return this.fb.group({
      mark:'',
      grade:''
    });
  }
  addStuMarks(stuIndex:number){
    this.studMarks(stuIndex).push(this.newMarks());
  }
  removeStuMark(stuIndex:number,markIndex:number){
    this.studMarks(stuIndex).removeAt(markIndex);
  }
  onSubmit(){
    console.log(this.studForm.value);
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
export interface Trustee{
  id:number;
  name:string;
  sex:string; 
  countryOfResidence:Countries;
  passport:string;  
  issuanceDate:Date;
  noOfDependents:number;
}
export class Countries{
  id!:string;
  name!:string;
  constructor(id:string,name:string){
    this.name=name;
    this.id=id;
  }
}
@Component({
  selector: 'templateForms1',
  templateUrl: './template-forms1.component.html',
  styleUrls: ['./template-forms1.component.css']
})
export class TemplateForms1Component implements OnInit{
  ngOnInit(): void {
  }

  onSubmit(tForm:any){
    alert('form submitted');
    console.log('success');
  }
  reset(tForm:any){
    tForm.resetForm();
  }

  country:Countries[]=[
    new Countries('0','Select..'),
    new Countries('1','India'),
    new Countries('2','Other')
  ];
}
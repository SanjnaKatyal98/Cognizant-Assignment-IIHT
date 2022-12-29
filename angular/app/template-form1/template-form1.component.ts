import { Component,OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
export class Trustee{
  tId!: number;
  name!:string;
  sex!: string; 
  passport!: string;  
  issuanceDate!: string;
  noOfDependents!: number;
}
@Component({
  selector: 'templateForm1',
  templateUrl: './template-form1.component.html',
  styleUrls: ['./template-form1.component.css']
})
export class TemplateForm1Component implements OnInit{
  trustee!: Trustee;
  @ViewChild('tempForm',{}) tempForm !: NgForm;
  ngOnInit(): void {
    this.trustee={
    tId:0,
    name:'Sanj',
    passport:'1234567890',
    issuanceDate:'2022-12-29',
    noOfDependents:1,
    sex:'female'  
  }
    setTimeout(()=>{
      this.tempForm.setValue(this.trustee);
    }, 1000);
  }
  onSubmit(tempForm:any){
    alert('form submitted');
    console.log('success');
  }
  reset(tempForm:any){
    tempForm.resetForm();
  }
}

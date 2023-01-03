import { Component ,OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  title2='Book Form';
    bookForm!:FormGroup;
    constructor(private formBuilder:FormBuilder) {}
    
    get DoP(){
      return this.bookForm.get('DoP')
    }
    publisher():FormArray{
      return this.bookForm.get('publisher') as FormArray
    }
    newPub():FormGroup{
      return this.formBuilder.group({
        pname:'',
        pmail:''
      })
    }
    addPub(){
      this.publisher().push(this.newPub())
    }
    removePub(i:number){
      this.publisher().removeAt(i)
    }
  get id(){
    return this.bookForm.get('id')
  }
  get title(){
    return this.bookForm.get('title')
  }
  get dateOfPublishing(){
    return this.bookForm.get('dateOfPublishing')
  }
  get name(){
    return this.bookForm.get('author')?.get('name')
  }
  get email(){
    return this.bookForm.get('author')?.get('email')
  }
    ngOnInit(): void {
      this.bookForm=this.formBuilder.group({
        id:['1',[Validators.required,Validators.max(10)]],
        title:['Java',[Validators.required,Validators.minLength(4)]],
        dateOfPublishing:['2000/12/12',[Validators.required]],
        author:this.formBuilder.group({
          Name:['Sanjna',[Validators.required]],
          Email:['sanjna@gmail.com',[Validators.required]]
        }),
        DoP:['2000/12/12',[Validators.required]],
        publisher:this.formBuilder.array([])
      });
    }
    onSubmit(){
      console.log(this.bookForm.value);
    }
}

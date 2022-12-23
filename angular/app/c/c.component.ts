import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-c',
  templateUrl: './c.component.html',
  styleUrls: ['./c.component.css']
})
export class CComponent implements OnInit {

  productName:string='mouse';
  constructor() { }

  ngOnInit(): void {
  }
 handler(msg:string){
  this.productName=msg;
 }
}

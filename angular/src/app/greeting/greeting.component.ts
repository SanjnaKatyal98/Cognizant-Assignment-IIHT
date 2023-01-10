import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit{
  //@Input() 
  //mssg!:string;
  mssg:string='welcome to angular';
  ngOnInit(): void {}
  constructor(){}
}
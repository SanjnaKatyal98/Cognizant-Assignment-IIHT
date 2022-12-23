import { Component,Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit ,OnChanges{
  //rating and cropping of the stars
  @Input() rating:number=0;
  cropWidth:number =75;
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    this.cropWidth =  this.rating *75/5;
  }
  ngOnInit(): void {
  }
}

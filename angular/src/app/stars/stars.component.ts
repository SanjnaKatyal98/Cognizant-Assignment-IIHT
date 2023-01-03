import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit ,OnChanges{
  @Output() ratingClicked:EventEmitter<string>=new EventEmitter<string>();
  //rating and cropping of the stars
  @Input() rating:number=0;
  cropWidth:number =75;
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    this.cropWidth =  this.rating *75/5;
  }
  ngOnInit(): void {
  }
  onClick():void{
    this.ratingClicked.emit(` the rating ${this.rating} is clicked `);
  }
}
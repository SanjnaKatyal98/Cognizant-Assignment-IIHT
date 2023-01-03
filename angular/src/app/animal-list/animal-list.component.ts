import { Component } from '@angular/core';

@Component({
  selector: 'animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent{
  showImage:boolean=false;
  imageWidth:number=150;
  imageHeight:number=150;
  imageMargin:number=5;
  //any data type array
  arr:any[]=[{
    name:'lion',
    imageUrl:'../../assets/roses.jpg'
  },{
    name:'dolphin',
    imageUrl:'../../assets/beach.jpg'
  },{
    name:'sparrow',
    imageUrl:'../../assets/mountain.jpg'
    }];

  imageVisibility():void{
    this.showImage= !this.showImage;
  }
}
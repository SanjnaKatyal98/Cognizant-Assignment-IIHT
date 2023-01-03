import { Component , OnInit} from '@angular/core';
import { IFlat } from './flats';
@Component({
  selector: 'flat-list',
  templateUrl: './flats.component.html',
  styleUrls: ['./flats.component.css']
})
export class FlatsComponent implements OnInit{


  ngOnInit(): void {
    this.filteredFlats = this.flats;
  }
   _numRooms:number=0;
  showImage:boolean=false;
  imageWidth:number=50;
  imageHeight:number=50;
  imageMargin:number=5;
  filteredFlats:IFlat[]=[];


  annualRent=100000;

  get numRooms():number{
       return  this._numRooms;
  }

  set numRooms(val:number){

    this._numRooms=val;
    console.log('in setter ',val);
    this.filteredFlats=this.filterData(val);
    console.log('in setter',this.filteredFlats);
  }



  person={name:'max',
address:'pune'}
 //any data type array
  flats:IFlat[]=[
     {

    flatNumber:101,
    areaInSqFt:1000,
    numberOfRooms:2,
    numberOfBalconies:2,
    monthlyRent:20000,
    imageUrl:'../../assets/mountain.jpg'

  },{


      flatNumber:201,
      areaInSqFt:1500,
      numberOfRooms:3,
      numberOfBalconies:2,
      monthlyRent:25000,
      imageUrl:'../../assets/roses.jpg'



  },{


      flatNumber:302,
      areaInSqFt:1500,
      numberOfRooms:3,
      numberOfBalconies:2,
      monthlyRent:26000,
      imageUrl:'../../assets/beach.jpg'


  },{


    flatNumber:305,
    areaInSqFt:1500,
    numberOfRooms:1,
    numberOfBalconies:0,
    monthlyRent:26000,
    imageUrl:'../../assets/moon.jpeg'


} ];

imageVisibility():void{

  this.showImage= !this.showImage;
}


filterData(val:number):IFlat[]{
  val=this.numRooms;
  return this.flats.filter((flat:IFlat)=>flat.numberOfRooms==val);



}
}
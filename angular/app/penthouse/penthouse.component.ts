import { Component } from "@angular/core";

@Component({
  selector:'pent-house',
  templateUrl:'./penthouse.component.html',
  styleUrls:['./penthouse.component.css']
})

export class PenthouseComponent{
   
  houseId:Number=102;
  area:String = "2000 sq";
  noOfRooms:Number = 2;
  swimmingPool: Boolean = true

}
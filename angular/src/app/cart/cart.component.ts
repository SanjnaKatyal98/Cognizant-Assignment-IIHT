import { Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { IProduct } from '../products/product';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit,OnChanges{
  title:string='';

  ngOnChanges(changes: SimpleChanges): void {
     
  }
  ngOnInit(): void {
    
  }

  @Input() cartList:IProduct[]=[];

  ratingClick(msg:string):void{
    // console.log('inside product click')
    this.title = msg;
  }

}
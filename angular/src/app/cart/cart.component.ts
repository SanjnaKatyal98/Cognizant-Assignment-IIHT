import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Category,IProduct } from '../product-list/product';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnChanges,OnInit{
  ngOnChanges(changes: SimpleChanges): void {
  }
  ngOnInit(): void {
  }
  @Input() cartList:IProduct[]=[];
}
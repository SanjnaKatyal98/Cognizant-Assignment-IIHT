import { Component } from '@angular/core';
import { IProduct } from '../product-list/product';

@Component({
  selector: 'app-product',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductComponent {
  pageTitle:string = 'my angular app';

  cartProducts:IProduct[]=[];

  receiveEmittedProduct(obj:IProduct){
      // console.log(JSON.stringify(obj));
      let index = this.cartProducts.findIndex((prod)=>prod.id === obj.id);
     
      if(index==-1){
        this.cartProducts=[...this.cartProducts,obj];
      }else{
        this.cartProducts[index].quantity = obj.quantity;
      }
      
      //products with quantity=0 are removed
      this.cartProducts = this.cartProducts.filter((prod)=>prod.quantity !==0)

  }
}
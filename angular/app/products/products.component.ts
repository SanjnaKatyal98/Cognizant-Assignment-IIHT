import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Category, IProduct } from './product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  msg:string='sanj';
  ngOnInit(): void {
    this.filteredProducts=this.products;
  }
  category:Category=Category.All;
  filteredProducts:IProduct[]=[];

  products:IProduct[]=[
    {
      id:1 ,
      name:'Pizza',
      price: 200,
      image: '../../assets/beach.jpg',
      category: Category.Food,
      rating:5,
      quantity: 0
    },
    {
      id:5,
      name:'Tshirt',
      price:1200,
      image: '../../assets/roses.jpg',
      category: Category.Clothing,
      rating:3,
      quantity: 0
    },
    {
      id:10,
      name:'Table',
      price: 120000,
      image: '../../assets/mountain.jpg',
      category: Category.Furniture,
      rating:2,
      quantity: 0
    },
    {
      id:16,
      name:'Shampoo',
      price:400,
      image: '../../assets/moon.jpeg',
      category: Category.Cosmetics,
      rating:4,
      quantity: 0
    }
  ]
  productRatingClicked(msg:string):void{
    this.msg=msg;
  }
  filterProd():void{
    this.filteredProducts = this.products.filter((p:IProduct)=>p.category === (this.category));
  }
  disp(){
    alert('added successfully');
  }
  
  @Output() emitProductToCart:EventEmitter<IProduct>= new EventEmitter<IProduct>();

  increaseQuantity(p:IProduct):void{
     let index = this.products.findIndex((prod)=> p.id === prod.id);
     this.products[index].quantity+=1;
     this.emitProductToCart.emit(p);
  }

  decreaseQuantity(p:IProduct):void{
    let index = this.products.findIndex((prod)=> p.id === prod.id);
   
    if(this.products[index].quantity!=0){
      this.products[index].quantity-=1;
      this.emitProductToCart.emit(p);
    }
    
  }

  //called on click of btn add to cart and emit the product to app component
  onSelect(p:IProduct){
    this.emitProductToCart.emit(p);
  }

}
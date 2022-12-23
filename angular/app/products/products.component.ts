import { Component, OnInit } from '@angular/core';
import { Category, IProduct } from './product';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  ngOnInit(): void {
    this.filteredProducts=this.products;
  }

  category:Category=Category.Food;
 
  filteredProducts:IProduct[]=[];

  products:IProduct[]=[
    {
      id:1 ,
      name:'Pizza',
      price: 200,
      image: '../../assets/beach.jpg',
      category: Category.Food,
      rating:5
    },
    {
      id:5,
      name:'Tshirt',
      price:1200,
      image: '../../assets/roses.jpg',
      category: Category.Clothing,
      rating:3
    },
    {
      id:10,
      name:'Table',
      price: 120000,
      image: '../../assets/mountain.jpg',
      category: Category.Furniture,
      rating:2
    },
    {
      id:16,
      name:'Shampoo',
      price:400,
      image: '../../assets/moon.jpeg',
      category: Category.Cosmetics,
      rating:4
    }
  ]

  filterProd():void{
    this.filteredProducts = this.products.filter((p:IProduct)=>p.category === (this.category));
  }
}

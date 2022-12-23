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
      category: Category.Food
    },
    {
      id:5,
      name:'Tshirt',
      price:1200,
      image: '../../assets/roses.jpg',
      category: Category.Clothing
    },
    {
      id:10,
      name:'Table',
      price: 120000,
      image: '../../assets/mountain.jpg',
      category: Category.Furniture
    },
    {
      id:16,
      name:'Shampoo',
      price:400,
      image: '../../assets/moon.jpeg',
      category: Category.Cosmetics
    }
  ]

  filterProd():void{
     this.filteredProducts = this.products.filter((p:IProduct)=>p.category.includes(this.category));
  }
}

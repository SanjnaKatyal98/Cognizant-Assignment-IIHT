import { Component,EventEmitter, Output } from '@angular/core';
import { LoggingService } from 'shared/logging.service';
import { ProductService } from 'shared/products.service';
import { IProducts } from './products';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  constructor(private ps:ProductService,private ls:LoggingService){}
  ngOnInit(): void {
  }
  mssg:string=this.ls.log();
  start(){
    alert(this.mssg);
  }
  products:IProducts[]=this.ps.getProducts();
  @Output() emitItemtoCart:EventEmitter<IProducts>=new EventEmitter<IProducts>();
  addItem(p:IProducts):void{
    this.emitItemtoCart.emit(p);
  }
}
import { Component,EventEmitter, Output,OnDestroy } from '@angular/core';
import { LoggingService } from 'shared/logging.service';
import { ProductService } from 'shared/products.service';
import { IProducts } from './products';
import { Observable, Subscription } from 'rxjs';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  sub!:Subscription;
  errMssg:string='';
  constructor(private ps:ProductService,private ls:LoggingService){}
  ngOnInit(): void {
    this.ps.getProducts().subscribe((prod:IProducts[])=>{
        this.product=prod;
    },err=>{
      this.errMssg=err;
      console.log(err);
    });
  }
  mssg:string=this.ls.log();
  start(){
    alert(this.mssg);
  }
  product!:IProducts[];
  dataReceived=this.ps.getProducts();
  //products:IProducts[]=this.ps.getProducts();
  @Output() emitItemtoCart:EventEmitter<IProducts>=new EventEmitter<IProducts>();
  addItem(p:IProducts):void{
    this.emitItemtoCart.emit(p);
  }
  ngOnDestroy():void{
    this.sub.unsubscribe();
  }
}
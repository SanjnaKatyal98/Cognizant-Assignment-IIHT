import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PenthouseComponent } from './penthouse/penthouse.component';
import { FlatlistComponent } from './flatlist/flatlist.component';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { PipesComponent } from './pipes/pipes.component';
import { StarComponent } from './star/star.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { CComponent } from './c/c.component';
import { CartComponent } from './cart/cart.component';
import { TransformDataPipe } from './transform-data.pipe';
import { RepeatDataPipe } from './repeat-data.pipe';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { HomepageComponent } from './homepage/homepage.component';
import { EventsListComponent } from './events-list/events-list.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DBService } from 'shared/inmemoryeventdbservice';
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PenthouseComponent,
    FlatlistComponent,
    AnimalListComponent,
    ProductListComponent,
    PipesComponent,
    StarComponent,
    AComponent,
    BComponent,
    CComponent,
    CartComponent,
    TransformDataPipe,
    RepeatDataPipe,
    ProductsComponent,
    HomepageComponent,
    EventsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, CommonModule, ReactiveFormsModule,HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(DBService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

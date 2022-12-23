import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PenthouseComponent } from './penthouse/penthouse.component';
import { WelcomeComponentComponent } from './welcome-component/welcome-component.component';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { ProductsComponent } from './products/products.component';
import { StarsComponent } from './stars/stars.component';

@NgModule({
  declarations: [
    AppComponent,
    PenthouseComponent,
    WelcomeComponentComponent,
    AnimalListComponent,
    ProductsComponent,
    StarsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
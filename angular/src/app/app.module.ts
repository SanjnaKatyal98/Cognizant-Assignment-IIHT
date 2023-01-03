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
import { FlatsComponent } from './flats/flats.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { CComponent } from './c/c.component';
import { CartComponent } from './cart/cart.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TemplateForm1Component } from './template-form1/template-form1.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { EmpArrayFormComponent } from './emp-array-form/emp-array-form.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PipesComponent } from './pipes/pipes.component';
import { LoginCompComponent } from './login-comp/login-comp.component';
@NgModule({
  declarations: [
    AppComponent,
    PenthouseComponent,
    WelcomeComponentComponent,
    AnimalListComponent,
    ProductsComponent,
    StarsComponent,
    FlatsComponent,
    AComponent,
    BComponent,
    CComponent,
    CartComponent,
    TemplateFormsComponent,
    TemplateForm1Component,
    ReactiveFormsComponent,
    EmpArrayFormComponent,
    StudentFormComponent,
    NavbarComponent,
    HomePageComponent,
    PipesComponent,
    LoginCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,CommonModule
    //,HttpClientInMemoryWebAplModule.forRoot(DbService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
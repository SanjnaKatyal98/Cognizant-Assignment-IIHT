import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { EmpArrayFormComponent } from './emp-array-form/emp-array-form.component';
import { CartComponent } from './cart/cart.component';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { CComponent } from './c/c.component';
import { FlatsComponent } from './flats/flats.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { TemplateForm1Component } from './template-form1/template-form1.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { PenthouseComponent } from './penthouse/penthouse.component';
import { WelcomeComponentComponent } from './welcome-component/welcome-component.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PipesComponent } from './pipes/pipes.component';
const routes: Routes = [
  {path:'welcome',pathMatch:'full' ,component:WelcomeComponentComponent},
  {path:'books' ,component:ReactiveFormsComponent},
  {path:'animals' ,component:AnimalListComponent},
  {path:'employee', component:EmpArrayFormComponent},
  {path:'student', component:StudentFormComponent},
  {path:'flats', component:FlatsComponent},
  {path:'product list',component:ProductsComponent},
  {path:'login1',pathMatch:'full' ,component:TemplateForm1Component},
  {path:'login',pathMatch:'full' ,component:TemplateFormsComponent},
  {path:'penthouse',pathMatch:'full' ,component:PenthouseComponent},
  {path:'cart' ,component:CartComponent},
  {path:'A' ,component:AComponent},
  {path:'B' ,component:BComponent},
  {path:'C' ,component:CComponent},
  {path:'pipes',pathMatch:'full' ,component:PipesComponent},
  {path:'',pathMatch:'full' ,component:HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

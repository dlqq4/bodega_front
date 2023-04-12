import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './presentation/shared/home/home.component';

const routes: Routes = [

  /*
  El nombre de este path es el que va en la url.
  */

  {path: '', redirectTo: 'app-home' , pathMatch: 'full'},
  {path: 'app-home', component: HomeComponent},
  {path: 'view-product', loadChildren:() => import('./presentation/prooduct-components/product.module').then(m =>m.ProductModule)},
  {path: '**', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './presentation/shared/home/home.component';

const routes: Routes = [

 
  {path: '', redirectTo: 'app-home' , pathMatch: 'full'},
  {path: 'app-home', component: HomeComponent},
  {path: 'product', loadChildren:() => import('./presentation/prooduct-components/product.module').then(m =>m.ProductModule)},
  {path: 'warehouse', loadChildren:() => import('./presentation/warehouse-components/warehouse.module').then(m =>m.WarehouseModule)},
  {path: 'inventory', loadChildren:() => import('./presentation/inventory-components/inventory.module').then(m =>m.InventoryModule)},
  {path: '**', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

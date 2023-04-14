import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewInventoryComponent } from './view-inventory/view-inventory.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../shared/home/home.component';
import { AddInventoryComponent } from './add-inventory/add-inventory.component';
import { UpdateInventoryComponent } from './update-inventory/update-inventory.component';


const routes : Routes = [
  {
    path: '',
    children: [
      {path: 'app-view-inventory', component : ViewInventoryComponent},
      {path: 'app-add-inventory', component : AddInventoryComponent},
      {path: 'app-update-inventory/:id', component : UpdateInventoryComponent},
      {path: '**', component : HomeComponent}
    ]
    
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class InventoryRoutingModule { }

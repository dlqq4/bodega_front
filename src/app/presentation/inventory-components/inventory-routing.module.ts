import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewInventoryComponent } from './view-inventory/view-inventory.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../shared/home/home.component';
import { AddInventoryComponent } from './add-inventory/add-inventory.component';


const routes : Routes = [
  {
    path: '',
    children: [
      {path: 'app-view-inventory', component : ViewInventoryComponent},
      {path: 'app-add-inventory', component : AddInventoryComponent},
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

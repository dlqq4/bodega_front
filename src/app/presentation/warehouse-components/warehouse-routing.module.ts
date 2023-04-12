import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ViewWareHouseComponent } from './view-warehouse/view-warehouse.component';
import { HomeComponent } from '../shared/home/home.component';

const routes : Routes = [
  {
    path: '',
    children: [
      {path: 'app-view-warehouse', component : ViewWareHouseComponent},
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
export class WarehouseRoutingModule { }

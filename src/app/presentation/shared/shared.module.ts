import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HomeComponent } from './home/home.component';

import { LoginModule } from '../login-components/login.module';



@NgModule({
  declarations: [
    ToolbarComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    AppRoutingModule,
    LoginModule,
  ],
  exports:[
    ToolbarComponent,
    FooterComponent,
    HomeComponent
   ],
   providers: [],
})
export class SharedModule { }

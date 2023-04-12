import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HomeComponent } from './home/home.component';
import { GlobalService } from 'src/app/utils/service/global.service';



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
   // LoginModule,
  ],
  exports:[
    ToolbarComponent,
    FooterComponent,
    HomeComponent
   ],
   providers: [GlobalService],
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GlobalService } from './utils/service/global.service';
import { SharedModule } from './presentation/shared/shared.module';



@NgModule({
  declarations: [
    AppComponent 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule
 
  ],
  providers: [GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './presentation/shared/shared.module';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { LoginModule } from './presentation/login-components/login.module';
import { ViewInventoryComponent } from './presentation/inventory-components/view-inventory/view-inventory.component';
import { AddInventoryComponent } from './presentation/inventory-components/add-inventory/add-inventory.component';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    LoginModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth())
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

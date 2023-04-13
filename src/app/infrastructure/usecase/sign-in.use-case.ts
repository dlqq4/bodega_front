import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';



@Injectable({
  providedIn: 'root'
})
export class SignInUseCase {


  private statusControl : boolean = false; 
  public statusEmiter : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.statusControl)


  constructor() {
  }

  defaultLogin(){
    if(!localStorage.getItem('MyToken')){
      localStorage.setItem('MyToken', 'false')
    }   
  }
 
  activeLogin(){
    localStorage.setItem('MyToken', 'true')
    this.statusControl = !this.statusControl; // ACA GENERO EL CAMBIO EN LA VARIABLE OBSERVABLE
    this.statusEmiter.next(this.statusControl); // A LA ESPERA DE UN PROXIMO CAMBIO DE INFORMACION
  }

  
  



}

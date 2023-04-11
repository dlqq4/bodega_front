import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Auth, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  userId: string = "";
  private apiServeUrl = environment.apiBaseUrl;
  private statusControl: boolean = false;
  public statusEmiter: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.statusControl)
  userIsLogged: boolean = false;

  constructor(private http: HttpClient, private auth: Auth) { }


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


  logOut(){
    localStorage.clear()
  }


  ngOninit(){
    this.defaultLogin()
  }


  registerGoogle(){
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }





}



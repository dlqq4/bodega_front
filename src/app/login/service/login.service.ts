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

  registerGoogle(){
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }





}



import { Component, OnInit } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from '@angular/fire/auth';
import { FormControl, FormGroup } from '@angular/forms';
import { SignInUseCase } from 'src/app/infrastructure/usecase/sign-in.use-case';
import { SwitchUseCase } from 'src/app/infrastructure/usecase/switch.use-case';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  formLogin: FormGroup;

  constructor(
    private auth: Auth,
    private signInUseCase: SignInUseCase,
    public switchUseCase : SwitchUseCase) {
    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit() {
    this.signInUseCase.defaultLogin();
  }


  loginWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider);
  }

  async onClickLogin() {
    const userCredential = await this.loginWithGoogle();
    this.signInUseCase.activeLogin();
    const token = await userCredential.user?.getIdToken();
    localStorage.setItem('token', token);
    console.log(token);
  }

  
  //*****************************LOGIN*******************************/

  login({ email, password }: any) {
    return signInWithEmailAndPassword(this.auth, email, password)
  }

  onSubmit(){
    this.login(this.formLogin.value)
    .then(response =>{console.log(response);
    this.signInUseCase.activeLogin();
    this.switchUseCase.switchLogIn = false;
    this.switchUseCase.switchPresentation = true;
    })
    .catch(error => console.error(error));
  }

}

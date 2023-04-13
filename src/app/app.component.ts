import { Component } from '@angular/core';
import { SignInUseCase } from './infrastructure/usecase/sign-in.use-case';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Bodega_Front';

  constructor(private signInUseCase : SignInUseCase) {
  }

  status: boolean = true;


  ngOnInit(): void {
    this.signInUseCase.statusEmiter.subscribe((data) =>  this.status = data)
  }


}

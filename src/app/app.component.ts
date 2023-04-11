import { Component } from '@angular/core';
import { LoginService } from './core/services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'bodega_front';

  constructor(public loginService: LoginService) {
  }

  status: boolean = true;

  ngOnInit(): void {
    this.loginService.statusEmiter.subscribe((data) =>  this.status = data)
  }

}

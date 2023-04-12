import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Bodega_Front';

  constructor() {
  }

  status: boolean = true;

  ngOnInit(): void {
   
  }

}

import { Component } from '@angular/core';
import { Carousel, Dropdown, initTE } from 'tw-elements';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-game';

  // inyecto el servicio en el componente
  constructor() {}

  ngOnInit() {
    initTE({ Carousel, Dropdown });
  }
}

import { Component } from '@angular/core';
import { Ripple, initTE } from 'tw-elements';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  ngOnInit() {
    initTE({ Ripple });
  }
}

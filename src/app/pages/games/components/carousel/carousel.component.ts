import { Component } from '@angular/core';
import { Carousel, initTE } from 'tw-elements';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  ngOnInit() {
    initTE({ Carousel });
  }
}

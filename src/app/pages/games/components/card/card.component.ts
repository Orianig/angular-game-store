import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-game-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() game: any;
  @Input() type = 'small';
}

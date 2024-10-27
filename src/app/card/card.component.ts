import { Component } from '@angular/core';
import { HeadCardComponent } from "../head-card/head-card.component";
import { BodyCardComponent } from "../body-card/body-card.component";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [HeadCardComponent, BodyCardComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

}

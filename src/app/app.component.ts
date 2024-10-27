import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JsonPipe } from '@angular/common';
import { log } from 'console';

import {FormsModule} from '@angular/forms'
import { FormComponent } from "./form/form.component";
import { CardComponent } from "./card/card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JsonPipe, FormsModule, FormComponent, CardComponent],
 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'School Card Creation';
  showCard:boolean=false

  toggleVisibilotyCard(){
    this.showCard= true
  }
  
 

}

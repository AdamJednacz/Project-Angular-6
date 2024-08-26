import { Component } from '@angular/core';
import {ButtonsComponent} from "../../shared/buttons/buttons.component";

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [
    ButtonsComponent
  ],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent {

}

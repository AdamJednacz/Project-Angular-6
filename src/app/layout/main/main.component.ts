import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";

import {CheckDistanceComponent} from "./check-distance/check-distance.component";
import {AddAddressComponent} from "./add-address/add-address.component";
import {WelcomeComponent} from "./welcome/welcome.component";
import {TopBarComponent} from "../top-bar/top-bar.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    RouterOutlet,
    WelcomeComponent,
    CheckDistanceComponent,
    AddAddressComponent,
    TopBarComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}

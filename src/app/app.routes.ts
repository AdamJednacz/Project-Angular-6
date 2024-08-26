import { Routes } from '@angular/router';
import {WelcomeComponent} from "./layout/main/welcome/welcome.component";

export const routes: Routes = [

  {
    path:'',
    component:WelcomeComponent
  },
  {
    path:'check',
    loadComponent:()=>import('./layout/main/check-distance/check-distance.component').then(mod => mod.CheckDistanceComponent)
  },
  {
    path:'add',
    loadComponent:()=>import('./layout/main/add-address/add-address.component').then(mod =>mod.AddAddressComponent)
  },

];

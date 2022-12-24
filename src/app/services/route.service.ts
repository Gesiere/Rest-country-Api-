import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Country } from '../models/country';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor(private router : Router) { }

  getCountryDetails(country : Country){
    this.router.navigateByUrl('/',{skipLocationChange: true}).then(() => {
      this.router.navigate(['/details'], {state: country})
    })
  }
}

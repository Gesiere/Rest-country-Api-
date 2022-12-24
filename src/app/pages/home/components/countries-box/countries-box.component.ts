import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Country } from 'src/app/models/country';
import { RouteService } from 'src/app/services/route.service';

@Component({
  selector: 'app-countries-box',
  templateUrl: './countries-box.component.html',
  styleUrls: ['./countries-box.component.css']
})
export class CountriesBoxComponent {
@Input() countries : any;
@Input() searchValue! : string
 constructor(private routerService : RouteService){}

getDetails(country : Country) {
    this.routerService.getCountryDetails(country)
}
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Country } from 'src/app/models/country';
import { CountryService } from 'src/app/services/country.service';
import { RouteService } from 'src/app/services/route.service';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {
    country! : Country;
    borders!: any | undefined;
    constructor(private router: Router, private countryService: CountryService, private routeService : RouteService){}
    ngOnInit(): void {
      this.country = history.state
      this.borderCountries()
    }

    borderCountries(){
        let borders = this.country.borders
        this.countryService.getCountryByCodes(borders).subscribe(border => {
          this.borders = border
        })
    }

    gotoCountry(border : Country){
      this.routeService.getCountryDetails(border)
    }
    
}

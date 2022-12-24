import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/models/country';
import { CountryService } from 'src/app/services/country.service';
const REGION_OPTIONS = ['Africa','Americas', 'Asia', 'Europe', 'Oceania']
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit{
  countries : Array<Country> = [];
  regionOptions = REGION_OPTIONS
  region! : string
  renderedCountries! : any;
  searchText! : string;

  constructor(private countryService : CountryService){}

  ngOnInit(): void {
    this.allCountry()

  }
  allCountry(){
    this.countryService.getAllCountries().subscribe(country => {
      console.log(country);
      this.countries = country
      this.renderedCountries = this.countries
      
    })
  }

  onShowRegion(newRegion : string){
      this.countries = this.renderedCountries.filter((count : Country) => count.region === newRegion)
  }

  onSearchChange(searchValue : any) {
    this.countries = this.renderedCountries.filter((item : Country)  => item.name.toLowerCase().includes(searchValue.toLowerCase()))
    
  }
}

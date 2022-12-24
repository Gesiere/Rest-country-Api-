import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../models/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
REST_COUNTRY_API = 'https://restcountries.com/v2'
  constructor(private http : HttpClient) { }

  getAllCountries()  {
    return this.http.get<Array<Country>>(`${this.REST_COUNTRY_API}/all`)
  }

  getCountryByCodes(borders : string[]){
    return this.http.get(`${this.REST_COUNTRY_API}/alpha?codes=${borders}`)
  }

}

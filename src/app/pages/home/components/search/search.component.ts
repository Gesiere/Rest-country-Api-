import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
searchValue : any = ''
@Output() searchChangeText = new EventEmitter<any>

onSearchChange(s : any) {
  this.searchChangeText.emit(this.searchValue)

  
}
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
let html = document.querySelector('html')

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Input() isDarkEnabled! : boolean
  @Output() changeMode = new EventEmitter<string>


  toggleMode(event: any) {
    this.changeMode.emit(event)
  }
}

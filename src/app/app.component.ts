import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
let html = document.querySelector('html')

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Rest_countries_Api';
  isDarkModeEnabled = false



  ngOnInit(): void {
    
  }

  
  toggleMode(mode: string){
    if(mode === 'light'){
      html?.classList.remove('dark')
      this.isDarkModeEnabled = !this.isDarkModeEnabled
    } else if(mode === 'dark') {
      html?.classList.add('dark')
      this.isDarkModeEnabled = !this.isDarkModeEnabled
      
    }
    
  }


}

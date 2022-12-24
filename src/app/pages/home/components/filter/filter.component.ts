import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';

let htmlTag = document.querySelector('html')

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FilterComponent implements OnInit {
  filterString = 'Filter region'
  @Input() regionOptions! : Array<string>
  @Output() showRegion = new EventEmitter<string>
  @ViewChild('cdk-overlay-container') filterMenu! : ElementRef<any>
  el = document.getElementsByClassName('mdc-list-item__primary-text')



  ngOnInit(): void {
    
  }

  tofilter(){
      for (let index = 0; index < this.el.length; index++) {
        const element = this.el[index];
        if(htmlTag?.classList.contains('dark')){
          element.classList.add('text-white')
        } else {
          element.classList.remove('text-white')
        }
        
      }
  }


  onFilterRegion(region : string) {
    this.showRegion.emit(region)
    this.filterString = region
  }
}

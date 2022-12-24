import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesBoxComponent } from './countries-box.component';

describe('CountriesBoxComponent', () => {
  let component: CountriesBoxComponent;
  let fixture: ComponentFixture<CountriesBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountriesBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountriesBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

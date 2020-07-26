import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdaptercompnntComponent } from './adaptercompnnt.component';

describe('AdaptercompnntComponent', () => {
  let component: AdaptercompnntComponent;
  let fixture: ComponentFixture<AdaptercompnntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdaptercompnntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdaptercompnntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

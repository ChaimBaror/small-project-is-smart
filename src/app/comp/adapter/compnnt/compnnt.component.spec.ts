import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompnntComponent } from './compnnt.component';

describe('CompnntComponent', () => {
  let component: CompnntComponent;
  let fixture: ComponentFixture<CompnntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompnntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompnntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFromComponent } from './list-from.component';

describe('ListFromComponent', () => {
  let component: ListFromComponent;
  let fixture: ComponentFixture<ListFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

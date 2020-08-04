import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryChatComponent } from './history-chat.component';

describe('HistoryChatComponent', () => {
  let component: HistoryChatComponent;
  let fixture: ComponentFixture<HistoryChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

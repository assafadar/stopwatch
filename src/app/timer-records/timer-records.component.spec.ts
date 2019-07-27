import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerRecordsComponent } from './timer-records.component';

describe('TimerRecordsComponent', () => {
  let component: TimerRecordsComponent;
  let fixture: ComponentFixture<TimerRecordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerRecordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

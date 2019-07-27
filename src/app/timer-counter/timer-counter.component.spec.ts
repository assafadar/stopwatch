import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerCounterComponent } from './timer-counter.component';

describe('TimerCounterComponent', () => {
  let component: TimerCounterComponent;
  let fixture: ComponentFixture<TimerCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

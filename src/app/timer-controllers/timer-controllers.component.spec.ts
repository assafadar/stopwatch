import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerControllersComponent } from './timer-controllers.component';

describe('TimerControllersComponent', () => {
  let component: TimerControllersComponent;
  let fixture: ComponentFixture<TimerControllersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerControllersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerControllersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeRecordComponent } from './time-record.component';

describe('TimeRecordComponent', () => {
  let component: TimeRecordComponent;
  let fixture: ComponentFixture<TimeRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-time-record',
  templateUrl: './time-record.component.html',
  styleUrls: ['./time-record.component.css','../timer-counter/timer-counter.component.css']
})
export class TimeRecordComponent {
  //Record data
  @Input()record
  //States rather the app is in run mode or static mode
  @Input()isRunning;
  blinkStyle={'animation':'blinker 1s linear infinite'};
  constructor() {
  }

}

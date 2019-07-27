import { TimerRecord } from './../services/timer.service';
import { Component, Pipe, PipeTransform } from '@angular/core';
import { TimerService } from '../services/timer.service';

@Component({
  selector: 'app-timer-records',
  templateUrl: './timer-records.component.html',
  styleUrls: ['./timer-records.component.css','../app.component.css']
})
export class TimerRecordsComponent {
  
  records:TimerRecord[]  
  constructor(private timerService: TimerService) {
    this.timerService.records.subscribe(
      (recordsArr) => {
        this.records = recordsArr;
        this.records = this.records.slice().reverse();
      }
    );
  }

  deleteRecord(recordID){
    this.timerService.deleteRecord(recordID);
  }

}

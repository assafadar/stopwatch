import { TimerRecord } from './../services/timer.service';
import { Component, Pipe, PipeTransform } from '@angular/core';
import { TimerService } from '../services/timer.service';

@Component({
  selector: 'app-timer-records',
  templateUrl: './timer-records.component.html',
  styleUrls: ['./timer-records.component.css','../app.component.css']
})
export class TimerRecordsComponent {
  //Records array
  records:TimerRecord[]  

  constructor(private timerService: TimerService) {
    /**
     * Binding to the event of record update
     */
    this.timerService.records.subscribe(
      (recordsArr) => {
        this.records = recordsArr;
        //Sorting the array from last to first
        this.records = this.records.slice().reverse();
      }
    );
  }
  /**
   * 
   * @param recordID 
   * Fires a delete record event by record id
   */
  deleteRecord(recordID){
    this.timerService.deleteRecord(recordID);
  }

}

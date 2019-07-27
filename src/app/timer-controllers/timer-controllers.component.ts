import { TimerService } from './../services/timer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer-controllers',
  templateUrl: './timer-controllers.component.html',
  styleUrls: ['./timer-controllers.component.css','../app.component.css']
})
export class TimerControllersComponent implements OnInit {
  isTimerRunning
  constructor(private timerService: TimerService) {
    this.timerService.state.subscribe(
      (isRunning) => {
        this.isTimerRunning = isRunning;
      }
    )
  }

  ngOnInit() {
  }

  startTimer(){
    if(this.isTimerRunning){
      this.timerService.stopTimer();
    }else{
      this.timerService.startTimer();
    }
  }

  recordTime(){
    try{
      this.timerService.createRecord();
    }catch(e){
      alert(`Failed creating new record: ${e}`);
    }
  }

  deleteAllRecords(){
    this.timerService.deleteAllRecords();
  }
}

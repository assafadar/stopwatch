import { TimerService } from './../services/timer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer-controllers',
  templateUrl: './timer-controllers.component.html',
  styleUrls: ['./timer-controllers.component.css','../app.component.css']
})
export class TimerControllersComponent {
  //Local state variable
  isTimerRunning
  constructor(private timerService: TimerService) {
    /**
     * Binding the state change event
     */
    this.timerService.state.subscribe(
      (isRunning) => {
        this.isTimerRunning = isRunning;
      }
    )
  }

  /**
  * starts or pauses the timer 
  */
  startTimer(){
    if(this.isTimerRunning){
      this.timerService.stopTimer();
    }else{
      this.timerService.startTimer();
    }
  }
  /**
   * Creates a new timer record event
   */
  recordTime(){
    try{
      this.timerService.createRecord();
    }catch(e){
      alert(`Failed creating new record: ${e}`);
    }
  }
  /**
   * sends a delete all request
   */
  deleteAllRecords(){
    this.timerService.deleteAllRecords();
  }
}

import { TimerService, TimerRecord } from './../services/timer.service';
import { Component, OnInit } from '@angular/core';
/**
 * Initial object to prevent NaN or undefied values
 */
const initialObject =  {
  id:0,
  millis :"00",
  seconds : "00",
  minutes : "00"
};
@Component({
  selector: 'app-timer-counter',
  templateUrl: './timer-counter.component.html',
  styleUrls: ['./timer-counter.component.css','../app.component.css']
})
export class TimerCounterComponent {
  //Timer state
  isTimerRunning;
  //Number of millis since activation
  timerCounter;
  //Assiging a copy from the initial object
  record:TimerRecord = Object.assign({},initialObject);

  constructor(private timerService:TimerService) {
    /**
     * Binds to the state change event, if running starts the timer 
     * if not running pauses the timer.
     */
    this.timerService.state.subscribe((isRunning) => {
      this.isTimerRunning = isRunning;
      if(this.isTimerRunning){
        this.startTimer()
      }else{
        this.stopTimer();
      }
    });
  }
  /**
   * Sets and interval for 10 ml that takes the 
   * record object parse his attributes and assiging the new
   * data in a MM:SS.mm format
   */
  startTimer(){
    this.timerCounter = setInterval(() => {
      let millis = parseInt(this.record.millis);
      let seconds = parseInt(this.record.seconds);
      let minutes = parseInt(this.record.minutes);
      millis++;
      seconds =seconds+Math.floor(millis / 1000);
      minutes = minutes +  Math.floor(seconds / 60);
      if(millis >=100){
        millis = millis -100;
        seconds++;
    }
    if(seconds >= 60){
        seconds = seconds - 60;
        minutes++;
    }
      this.record.millis = this.parseCounter(millis);
      this.record.seconds = this.parseCounter(seconds);
      this.record.minutes = this.parseCounter(minutes);
      this.timerService.currentRecord = this.record;
    },10);
  }
  
  // creates a string template from two vars
  parseCounter(counter){
    if(parseInt(counter) > 10){
      return counter;
    }
    return String(counter).padStart(2,"0");
  }
  // Clearing the interval of timeCounter assigned at startTimer
  // In case that the current record is undefined it requires a restart of the timer
  // Assigment to initial object
  stopTimer(){
    clearInterval(this.timerCounter);
    if(!this.timerService.currentRecord){
      this.record =Object.assign({},initialObject);
    }
  }

}

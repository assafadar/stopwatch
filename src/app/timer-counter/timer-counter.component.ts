import { TimerService, TimerRecord } from './../services/timer.service';
import { Component, OnInit } from '@angular/core';

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
export class TimerCounterComponent implements OnInit {
  isTimerRunning;
  timerCounter;
  record:TimerRecord = Object.assign({},initialObject);
  constructor(private timerService:TimerService) {
    this.timerService.state.subscribe((isRunning) => {
      this.isTimerRunning = isRunning;
      if(this.isTimerRunning){
        this.startTimer()
      }else{
        this.stopTimer();
      }
    });
  }
  ngOnInit() {
  }

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
  
  parseCounter(counter){
    if(parseInt(counter) > 10){
      return counter;
    }
    return String(counter).padStart(2,"0");
  }

  stopTimer(){
    clearInterval(this.timerCounter);
    debugger;
    if(!this.timerService.currentRecord){
      this.record =  {
        id:0,
        millis :"00",
        seconds : "00",
        minutes : "00"
      };
    }
  }

}

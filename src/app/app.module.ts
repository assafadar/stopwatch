import { HttpService } from './services/http.service';
import { TimerService } from './services/timer.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TimerCounterComponent } from './timer-counter/timer-counter.component';
import { TimerControllersComponent } from './timer-controllers/timer-controllers.component';
import { TimerRecordsComponent } from './timer-records/timer-records.component';
import { HttpClientModule } from '@angular/common/http';
import { TimeRecordComponent } from './time-record/time-record.component';
@NgModule({
  declarations: [
    AppComponent,
    TimerCounterComponent,
    TimerControllersComponent,
    TimerRecordsComponent,
    TimeRecordComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [TimerService,HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }

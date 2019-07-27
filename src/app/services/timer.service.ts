import { HttpService } from './http.service';
import { Injectable ,EventEmitter} from "@angular/core";
const restAPI = 'http://shield-task.herokuapp.com/api/times';
export interface TimerRecord{
    id:number,
    minutes:string,
    seconds:string,
    millis:string
}
@Injectable()
export class TimerService{
  
    currentRecord:TimerRecord;
    existingRecords:TimerRecord[];
    records:EventEmitter<TimerRecord[]> = new EventEmitter<TimerRecord[]>();
    state:EventEmitter<boolean> = new EventEmitter<boolean>();
    
    constructor(private _httpService:HttpService){
        this.getRecords();
        this.stopTimer();
    }

    /**
     * Fires an event that starts the timer
     */
    startTimer(){
        this.state.emit(true);
    }
    /**
     * Fires an event that stops the timer
     */
    stopTimer(){
        this.state.emit(false);
    }
    /**
     * Taking any existing records
     * from the app api, expects and array of records
     */
    getRecords(){
        this._httpService.getRequest(restAPI).subscribe(
            (success:TimerRecord[]) => {
                this.existingRecords = (success);
                this.updateRecords()
            },
            (err) => {
                throw new Error(`Failed getting data from server ${err.message}`);
            }
        );        
    }
    /**
     * Fires an event containing the new records array
     */
    updateRecords(){
        this.records.emit(this.existingRecords);
    }
    /**
     * Creates a new record in DB,
     * creates a POST http request to API 
     * adds the new record to the record array and fine updateRecords event
     */
    createRecord(){
        this._httpService.postRequest(restAPI,this.currentRecord).subscribe(
            (success:TimerRecord) => {
                this.existingRecords.push(success);
                this.updateRecords();
            },
            (err) => {
                alert(`Failed creating new record: ${err.message}`);
            }
        ) 
    }
    /**
     * Makes a DELETE request to API in order to 
     * delete all existing recods, 
     * earase the local records array and fire the update records event
     */
    deleteAllRecords(){
        this._httpService.deleteRequest(restAPI).subscribe(
          () => {
            this.existingRecords = [];
            this.currentRecord = undefined;
            this.updateRecords();
            this.stopTimer();            
          },
          (err) => {
            alert(`Failed to delete all recors ${err}`);
          }  
        );
    }
    /**
     * 
     * @param recordID 
     * Makes a DELETE request in order to remove 
     * one record by the record_id.
     * Removes it from the array and fires the update records event.
     */
    deleteRecord(recordID: number) {
        let uri = `${restAPI}/${recordID}`;
        this._httpService.deleteRequest(uri).subscribe(
            () => {
                this.removeRecordFromArray(recordID);
            },
            (err) => {
                alert(`Failed deleteting record id ${recordID} due to ${err}`)
            }
        )
    }
    /**
     * 
     * @param recordID 
     * Finds the record by the record_id
     * Taking the record index and removing it from the array.
     * Fires update records event.
     */
    removeRecordFromArray(recordID){
        let record:TimerRecord; 
        this.existingRecords.forEach(e => {
            if(e.id == recordID){
                record = e;
            }
        });
        if(record){
            let index = this.existingRecords.indexOf(record);
            this.existingRecords.splice(index,1);
            this.updateRecords();
        }else{
            alert(`Invalid record id ${record}`);
        }

    }
}
import { HttpService } from './http.service';
import { Injectable ,EventEmitter} from "@angular/core";
const restAPI = 'http://localhost:8080/api/times';
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

    startTimer(){
        this.state.emit(true);
    }

    stopTimer(){
        this.state.emit(false);
    }

    getRecords(){
        this._httpService.getRequest(restAPI).subscribe(
            (success:TimerRecord[]) => {
                this.existingRecords = (success);
                this.updateRecords()
            },
            (err) => {
                throw new Error(`Failed getting data from server ${err}`);
            }
        );        
    }
    updateRecords(){
        this.records.emit(this.existingRecords);
    }
    createRecord(){
        this._httpService.postRequest(restAPI,this.currentRecord).subscribe(
            (success:TimerRecord) => {
                this.existingRecords.push(success);
                this.updateRecords();
            },
            (err) => {
                alert(`Failed creating new record: ${err}`);
            }
        ) 
    }

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
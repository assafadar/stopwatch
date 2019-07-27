import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
@Injectable()
export class HttpService{
    private _httpClient:HttpClient
    constructor(private httpClient:HttpClient){
        this._httpClient = this.httpClient;
    }
    getRequest(restURL){
        return this._httpClient.get(restURL)
    }

    postRequest(restUrl,requestBody){
        return this._httpClient.post(restUrl,requestBody);
    }

    deleteRequest(restUrl){
        return this._httpClient.delete(restUrl);
    }
}
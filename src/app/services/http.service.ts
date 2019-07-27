import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
@Injectable()
export class HttpService{
    private _httpClient:HttpClient
    constructor(private httpClient:HttpClient){
        this._httpClient = this.httpClient;
    }
    /**
     * 
     * @param restURL 
     * Return the http GET promise
     */
    getRequest(restURL){
        return this._httpClient.get(restURL);
    }
    /**
     * 
     * @param restUrl 
     * @param requestBody 
        return the http POST promise 
     */
    postRequest(restUrl,requestBody){
        return this._httpClient.post(restUrl,requestBody);
    }
    /**
     * 
     * @param restUrl 
     * return the http DELETE promise
     */
    deleteRequest(restUrl){
        return this._httpClient.delete(restUrl);
    }
}
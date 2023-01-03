mport { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IEvent } from "src/app/events/events";


@Injectable({
    providedIn:'root'
})

export class EventService{


    constructor(private http:HttpClient){}

    //pointing to events array in inMemory Event db
    private url='api/events/';
    
    getEvents(): Observable<IEvent[]>{
        return this.http.get<IEvent[]>(this.url);
    }
    
}
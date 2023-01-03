import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IAnimal } from "src/app/animals/animal-list/animal";
import { IEvent } from "src/app/events/events";


@Injectable({
    providedIn:'root'
})

export class AnimalService{


    constructor(private http:HttpClient){}

    private url ='api/animals';
    
    getAnimals(): Observable<any[]>{
        return this.http.get<IAnimal[]>(this.url);
    }
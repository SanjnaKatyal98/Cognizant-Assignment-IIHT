import { Injectable } from "@angular/core";
import {InMemoryDbService, RequestInfo} from 'angular-in-memory-web-api';
import { Observable } from "rxjs";
import { IEvent } from "src/app/events-list/events";

@Injectable({providedIn:'root'})
export class DBService implements InMemoryDbService{
    createDb() {
        const events:IEvent[]=[
            {
            "id":"101",
            "name":"BootCamp",
            "date":"2022-12-31",
            "time":"16-30-00",
            "price":399,
            "imageUrl": "#",
            "location": {
                        "address":"delhi",
                        "city":"janakpuri",
                        "country":"India"
                        },
            "session" :[
                        {
                        "id":"10101",
                        "name":"Batch 1",
                        "presenter":"Ms. Shalu Sharma",
                        "duration":"90",
                        "level":"Beginner",
                        "voters":["Shashwat","Suyash","Harshvardhan","Atharv","Upagya","Tanisha","Madhav","Ojaswini","Arav"]        
                        },{
                        "id":"10102",
                        "name":"Batch 1",
                        "presenter":"Ms. Shalu Sharma",
                        "duration":"90",
                        "level":"Beginner",
                        "voters":["Shashwat","Suyash","Harshvardhan","Atharv","Upagya","Tanisha","Madhav","Ojaswini","Arav"]
                        }
                    ]   
            },
            {
            "id":"101",
            "name":"BootCamp",
            "date":"2022-12-31",
            "time":"16-30-00",
            "price":399,
            "imageUrl": "#",
            "location": {
                       "address":"delhi",
                       "city":"janakpuri",
                       "country":"India"
                        },
            "session" :[
                        {
                        "id":"10101",
                        "name":"Batch 1",
                        "presenter":"Ms. Shalu Sharma",
                        "duration":"90",
                        "level":"Beginner",
                        "voters":["Shashwat","Suyash","Harshvardhan","Atharv","Upagya","Tanisha","Madhav","Ojaswini","Arav"]
                        }
                    ]   
            }
        ]
        return {events};
    }
}

/*[in events.json]
[
    {  
    "id": 1,
    "name":"Dance Event",
    "date":"01/01/2023",
    "time":"6:00p.m.-9:00p.m.",
    "price":2000,
    "image":"../assets/beach.jpg",
    "location":{
        "address":"Lake Park",
        "city":"Kalyani",
        "country":"India"
        }
    },
    {  
    "id": 2,
    "name":"Programmer Event",
    "date":"01/01/2023",
    "time":"3:00p.m.-6:00p.m.",
    "price":2000,
    "image":"../../assets/mountain.jpg",
    "location":{
        "address":"janakpuri",
        "city":"delhi",
        "country":"India"
        }
    },
    {  
    "id": 3,
    "name":"Unknown Event",
    "date":"01/01/2023",
    "time":"1:00p.m.-2:00p.m.",
    "price":3000,
    "image":"../../assets/beach.jpg",
    "location":{
        "address":"karol bagh",
        "city":"delhi",
        "country":"India"
        }
    }
]
*/
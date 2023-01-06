import { Injectable } from "@angular/core";
@Injectable({
    providedIn:'root'
})
export class LoggingService{
    log():string{
        return 'logging service eg';
    }
}
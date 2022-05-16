import { Injectable } from "@angular/core"
import { Observable } from "rxjs"

@Injectable({
    providedIn:"root" 
})
export class Time{
    private time:any

    public setTime(time:any){

        return this.time = time

    }
    public getTime():Promise<any>{
        return this.time
    }
}
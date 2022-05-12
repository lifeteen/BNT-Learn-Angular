import { Component, OnInit } from "@angular/core";
/*Tách service*/ 
import {IPService} from './ip.service'

/*import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from "rxjs";
*/
@Component({
    selector:'app-ip',
    template:'<h3>{{ip}}</h3>',
    providers:[IPService]
})

export class IpComponent implements OnInit{
    ip: String | undefined ;
    constructor (/*private http: HttpClient*/ 
    private ipService: IPService
    ){
        /*
        this.http.get('http://ip.jsontest.com/')
        .toPromise()
        .then((resJson: any) => this.ip=resJson.ip)
        .catch((err: any) => console.log(err))
    */
    }
    ngOnInit(): void {
    this.ipService.getIp()
   .then((ip: String | undefined)=> this.ip = ip)
   .catch(err => console.log(err))
    }
}


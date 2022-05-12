/*Tach service*/ 
import{Injectable} from '@angular/core'
import { HttpClient} from '@angular/common/http';
import { Observable } from "rxjs";


@Injectable()
export class IPService{
    ip: any;
    constructor(private http:HttpClient){}

    getIp(){
        return this.http.get('http://ip.jsontest.com/')
        .toPromise()
        .then((resJson: any) => this.ip=resJson.ip)
    }
}
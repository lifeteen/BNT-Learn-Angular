import { style } from '@angular/animations';
import{Component} from '@angular/core';
import { reduce } from 'rxjs';

@Component({
    templateUrl:'./word.componets.html',
    selector: 'app-world',
    styleUrls: ['./word.componets.css']
})

export class WordComponent{
    en = 'Hello';
    vn = 'Xin chào';
    forgot = false;

toggleForgot(){
    this.forgot=!this.forgot;
}
}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn-pipe',
  templateUrl: './learn-pipe.component.html',
  styleUrls: ['./learn-pipe.component.css']
})
export class LearnPipeComponent implements OnInit {
  birthday = new Date(2022,5,9);
  person ={name: 'Bac Si Trang', age: 30 };
  address=Promise.resolve('2 Duy Tan'); 
  constructor() { }
  ngOnInit(): void {
  }
}



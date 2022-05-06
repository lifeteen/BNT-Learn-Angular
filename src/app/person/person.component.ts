import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit  {
  @Input() name: string | undefined;
  @Input() age: string | undefined;
  @Output() removePerson = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  removeByClick(){
    this.removePerson.emit(this.name);
  }

}

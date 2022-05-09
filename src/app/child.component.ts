import {Component, Output, EventEmitter} from '@angular/core';
@Component({
    selector:'app-child',
    template:`
   <!-- <h3><button (click)="addParent();">ADD</button>
   <button (click)="SubParent();">SUB</button></h3>-->

   <!--Viewchild-->
   <h3>{{value}}</h3>
   `
})
/*Out put co tham so*/ 
export class ChildComponent{
  /*  @Output() myClick = new EventEmitter<boolean>();
    addParent(){
        this.myClick.emit(true);
    }
    SubParent(){
        this.myClick.emit(false);
    }*/

/*Viewchild*/
value = 0;
}
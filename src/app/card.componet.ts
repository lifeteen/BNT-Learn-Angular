
import { Component } from '@angular/core';

@Component({
    selector: 'app-card',
    template: `
        <div class="card">
           <!--ngContent-->
           <ng-content>
               
           </ng-content>

        </div>
    `,
    styles: [`
        .card {
            padding: 5px;
            margin: 5px;
            background: #fff;
            border-radius: 2px;
            display: inline-block;
            width: 300px;
            box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
        }
    `]
})

export class CardComponent {}
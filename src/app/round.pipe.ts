import{Pipe, PipeTransform}from '@angular/core';

@Pipe({ name: 'roundNum'})

export class RoundPipe implements PipeTransform {
    transform(value: any, ...args: any[]) {
        throw new Error('Method not implemented.');
    }
}
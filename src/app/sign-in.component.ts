import{Component}from '@angular/core';
@Component({
    selector: 'app-sign-in',
    template:`
    <form (ngSubmit)="OnSubmit(formSignIn);" #formSignIn="ngForm">
        <input placeholder="Email" ngModel name="email" required>
        <p> Email is required
        </p>

        <br>
        <input type="password" placeholder="Password" ngModel name="password">
        <br><br>
        <button [disabled]="formSignIn.invalid">Submit</button>
    </form>
    `
})
export class SignInComponent {
    OnSubmit(formSignIn: any): void{
        console.log(formSignIn);
        throw new Error('Form is invalid');
    }
}
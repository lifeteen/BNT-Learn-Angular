import{Component}from '@angular/core';
@Component({
    selector: 'app-sign-in',
    template:`
    <form (ngSubmit)="OnSubmit(formSignIn);" #formSignIn="ngForm">
        <input 
        placeholder="Email" 
        ngModel
        #txtEmail ="ngModel"
        name="email" 
        required
        email
        >
    
        <p *ngIf="txtEmail.errors?.['required']">
        Email is required
        </p>
        <div *ngIf="txtEmail.touched && txtEmail.errors?.['email']">
        Email is not valid
        </div>
        <br>

        <input 
        type="password" 
        placeholder="Password" 
        ngModel 
        #txtPassword ="ngModel"
        name="password"
        minlegth="6"
        pattern="[a-z]*"
        >
        <br>
        <div ngModelGroup="subjects">
            <label><input type="checkbox" [ngModel]="false" name="NodeJS"> NodeJS </label>
            <label><input type="checkbox" [ngModel]="false" name="Angular"> Angular </label>
            <label><input type="checkbox" [ngModel]="false" name=" ReactJS "> ReactJS </label>
        </div>
        <br>
        <button [disabled]="formSignIn.invalid">Submit</button>
    </form>
    <p>{{txtEmail.errors | json}}</p>
    <p>{{txtEmail.errors | json}}</p>
    <p>{{txtPassword.errors | json}}</p>
    <p>{{formSignIn.value| json}}</p>
    `
})
export class SignInComponent {
    OnSubmit(formSignIn: any): void{
        console.log(formSignIn);
        throw new Error('Form is invalid');
    }
}
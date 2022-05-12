import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {WordComponent} from './word/word.component';
import { BookComponent } from './book/book.component';
import { UserFormComponent } from './user-form/user-form.component';
import { StructComponent } from './struct/struct.component';
import { WordsComponent } from './words/words.component';
import { PersonComponent } from './person/person.component';
import { ListPersonComponent } from './list-person/list-person.component';
import {ParentComponet} from'./parent.componet' ;
import {ChildComponent} from'./child.component';
import { CardComponent } from './card.componet';
import { LearnPipeComponent } from './learn-pipe/learn-pipe.component';
import {RoundPipe} from './round.pipe';
import {IpComponent } from "./ip.component";
import {SignInComponent} from "./sign-in.component"

import {IPService} from './ip.service';
import { WeatherComponent } from './weather/weather.component'

@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    BookComponent,
    UserFormComponent,
    StructComponent,
    WordsComponent,
    PersonComponent,
    ListPersonComponent,
    ParentComponet,
    ChildComponent,
    CardComponent,
    LearnPipeComponent,
    RoundPipe,
    IpComponent,
    WeatherComponent,
    SignInComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [IPService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {RoutingModule} from './routing.module';
import { Navigation } from './navigation.component';
import { AppComponent } from './app.component';
import { Home } from './home.component';
import { DashBoard } from './dashBoard.component';
import { Profile } from './profile.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, RoutingModule ],
  declarations: [ AppComponent, Navigation,Home,DashBoard,Profile ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

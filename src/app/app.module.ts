import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {SnakeGameComponent} from "./snake-game/snake-game.component";
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';

@NgModule({
  declarations: [
    AppComponent,
    SnakeGameComponent,
    TicTacToeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

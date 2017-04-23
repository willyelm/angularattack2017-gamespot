import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Game Stop !!!';
  gameTypes = ['Snake', 'Tic Tac Toe', 'Bucket Fill'];
  gameSelect = 'snake';

  gameClick(e) {
    this.gameSelect = e.target.innerHTML.toLowerCase();
    console.log(this.gameSelect);
  }
}

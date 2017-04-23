import { Component , ElementRef, Renderer, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Game Stop !!!';
  gameTypes = ['Snake', 'Tic Tac Toe', 'Bucket Fill'];
  gameSelect = 'snake';
  playAreaWidth;
  playAreaHeight;
    constructor(
        private _eref: ElementRef, private  _render: Renderer
    ) {
    }
    ngOnInit() {
       this.getWidthHeight();
    }
    ngOnChanges() {
        this.getWidthHeight();
    }
    getWidthHeight() {
        this.playAreaWidth = document.getElementById('playArea').clientWidth + 'px';
        this.playAreaHeight = document.getElementById('playArea').clientHeight + 'px';

    }
  gameClick(e) {
    this.gameSelect = e.target.innerHTML.toLowerCase();
  }
}

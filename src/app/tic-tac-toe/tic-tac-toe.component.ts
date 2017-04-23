import { Component, ElementRef, Renderer, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css']
})
export class TicTacToeComponent implements OnInit, OnChanges {
  tictactoeCanvas;
  context;
  @Input() playAreaWidth;
  @Input() playAreaHeight;
  canvasHeight;
  canvasWidth;
  game_loop;
  pointer;

  constructor(private _eref: ElementRef, private _render: Renderer) { }

  ngOnInit() {
      this.setCanvas();

  }
  ngOnChanges() {
      this.setCanvas();
      this.createTicCanvas();
  }
  setCanvas(){
    console.log(this._eref.nativeElement.getElementsByTagName('div'))
    this._render.setElementStyle(this._eref.nativeElement.getElementsByTagName('div')[0], 'width', this.playAreaWidth);
    this._render.setElementStyle(this._eref.nativeElement.getElementsByTagName('div')[0], 'height', this.playAreaHeight);
    this._render.setElementStyle(this._eref.nativeElement.getElementsByTagName('div')[0], 'background-color', 'black');


  }
  createTicCanvas() {
      var _self = this;
      let parent = document.getElementById('tictacBoard');
      for (let i = 0; i < 9 ; i++) {
          let block = document.createElement('div');
          block.setAttribute('id', 'block-' + i);
          block.addEventListener('click', function () {
             _self.writePointer(event.target);
          });
          parent.appendChild(block);
          this._render.setElementStyle(document.getElementById('block-' + i), 'width', '100px' );
          this._render.setElementStyle(document.getElementById('block-' + i), 'height', '100px' );
          this._render.setElementStyle(document.getElementById('block-' + i), 'border', '1px solid black' );
          this._render.setElementStyle(document.getElementById('block-' + i), 'background-color', 'mediumslateblue' );
          this._render.setElementStyle(document.getElementById('block-' + i), 'float', 'left' );
          this._render.setElementStyle(document.getElementById('block-' + i), 'cursor', 'pointer');


      }
      console.log(document.getElementById('tictacBoard'));
      this._render.setElementStyle(document.getElementById('tictacBoard'), 'margin-top', '20%');
      this._render.setElementStyle(document.getElementById('tictacBoard'), 'margin-left', '35%');
  }
  selectPointer(e){
      console.log(e.target.innerHTML);
      this.pointer = e.target.innerHTML;
  }

  writePointer(e) {
      console.log(e);
      e.innerHTML = 'x';
  }
}

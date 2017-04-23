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
  AiPointer;

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
          this._render.setElementStyle(document.getElementById('block-' + i), 'text-align', 'center');

          this._render.setElementStyle(document.getElementById('block-' + i), 'font-size', '75px');
          this._render.setElementStyle(document.getElementById('block-' + i), 'font-family', 'fantasy');




      }
      console.log(document.getElementById('tictacBoard'));
      this._render.setElementStyle(document.getElementById('tictacBoard'), 'margin-top', '20%');
      this._render.setElementStyle(document.getElementById('tictacBoard'), 'margin-left', '35%');
  }
  selectPointer(e){
      if(this.pointer == undefined){
          this.pointer = e.target.innerHTML;
          this.AiPointer = this.pointer == ' x ' ? ' o ' : ' x ' ;
          console.log(this.AiPointer, this.pointer);
      }
  }

  winner(a){
      if(a == this.pointer){
          window.alert('Congratulations! You won the game');
      } else {
          window.alert('You Lost! Better luck next time. ');
      }

      for (let i = 0; i < 9; i++ ) {
          document.getElementById('block-' + i).innerHTML = '';

      }
      this.pointer = undefined;
      this.AiPointer = undefined;
  }
  writePointer(e) {
      var tiles = [];
      if (this.pointer != undefined && e.innerHTML == '' ){
          e.innerHTML = this.pointer;
          for (let i = 0; i < 9; i++ ) {
              tiles[i] = document.getElementById('block-' + i).innerHTML;
          }
          console.log(tiles);
          this.checkBoxes(tiles, this.pointer);
          this.checkBoxes(tiles, this.AiPointer);

      }


  }
  checkBoxes(tiles, checkPointer){
      if (tiles[0] == checkPointer && tiles[1] == checkPointer && tiles[2] == checkPointer) {
          this.winner(checkPointer);
      } else if (tiles[3] == checkPointer && tiles[4] == checkPointer && tiles[5] == checkPointer) {
          this.winner(checkPointer);
      } else if (tiles[6] == checkPointer && tiles[7] == checkPointer && tiles[8] == checkPointer){
          this.winner(checkPointer);
      } else if (tiles[0] == checkPointer && tiles[3] == checkPointer && tiles[6] == checkPointer){
          this.winner(checkPointer);
      } else if (tiles[1] == checkPointer && tiles[4] == checkPointer && tiles[7] == checkPointer){
          this.winner(checkPointer);
      } else if (tiles[2] == checkPointer && tiles[5] == checkPointer && tiles[8] == checkPointer){
          this.winner(checkPointer);
      } else if (tiles[0] == checkPointer && tiles[4] == checkPointer && tiles[8] == checkPointer){
          this.winner(checkPointer);
      } else if (tiles[2] == checkPointer && tiles[4] == checkPointer && tiles[6] == checkPointer){
          this.winner(checkPointer);
      }
  }
}

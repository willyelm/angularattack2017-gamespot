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
      this._render.setElementStyle(document.getElementById('tictacBoard'), 'margin-top', '20%');
      this._render.setElementStyle(document.getElementById('tictacBoard'), 'margin-left', '35%');
  }
  selectPointer(e){
      if(this.pointer == undefined){
          this.pointer = e.target.innerHTML;
          this.AiPointer = this.pointer == ' x ' ? ' o ' : ' x ' ;
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
          this.checkBoxes(tiles, this.pointer);
          this.checkBoxes(tiles, this.AiPointer);
          setTimeout(this.aiTurn(e), 50000);



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
  };

  aiTurn(e) {
      var tileNumber =  e.id[e.id.length - 1];

      if (tileNumber == 0) {
            var aiArray = [1, 3, 4];
            this.chooseRand(aiArray);

      } else if(tileNumber == 1){
            var aiArray = [0, 2, 4];
            this.chooseRand(aiArray);

      } else if(tileNumber == 2){
          var aiArray = [1, 4, 5];
          this.chooseRand(aiArray);

      } else if(tileNumber == 3){
          var aiArray = [0, 4, 6];
          this.chooseRand(aiArray);

      } else if(tileNumber == 4){
          var aiArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];
          this.chooseRand(aiArray);

      } else if(tileNumber == 5){
          var aiArray = [2, 4, 8];
          this.chooseRand(aiArray);

      } else if(tileNumber == 6){
          var aiArray = [3, 4, 7];
          this.chooseRand(aiArray);

      } else if(tileNumber == 7){
          var aiArray = [6, 4, 8];
          this.chooseRand(aiArray);

      } else if(tileNumber == 8){
          var aiArray = [4, 5, 7];
          this.chooseRand(aiArray);
      }

  }
  chooseRand(aiArray){
      const completeArray = [0, 1, 2, 3, 4, 5, 6, 7, 8]
      var ctiles = [];
      for (let i = 0; i < 9; i++ ) {
          ctiles[i] = document.getElementById('block-' + i).innerHTML;
      }

      var filledArray = ctiles.filter(function ( val) {
          return val == '';
      })
      if(filledArray.length>0){
          var item =  aiArray[Math.floor(Math.random()* aiArray.length)];
          var currentElem = document.getElementById('block-' + item).innerHTML;
          if(currentElem == '') {
              document.getElementById('block-' + item).innerHTML = this.AiPointer
          } else{
              this.chooseRand(completeArray);
          }

      } else {
          this.gameOver();
      }

  }
  gameOver(){
      window.alert('Game Over !!')
      for (let i = 0; i < 9; i++ ) {
          document.getElementById('block-' + i).innerHTML = '';

      }
      this.pointer = undefined;
      this.AiPointer = undefined;
  }
}

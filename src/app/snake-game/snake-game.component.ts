import {Component, OnInit, ElementRef, Renderer, HostListener, OnChanges, Input} from '@angular/core';

@Component({
  selector: 'app-snake-game',
  templateUrl: './snake-game.component.html',
  styleUrls: ['./snake-game.component.css']
})
export class SnakeGameComponent implements OnInit, OnChanges {
  snakeCanvas;
  ctx;
  cwidth;
  cheight;
  navSnake: Array<any>;
  snakeCell;
  cellWidth= 10;
  snakeMove= 'right';
  score;
  game_loop;
  tail;
  @Input() playAreaWidth;
  @Input() playAreaHeight;




  constructor(
    private _eref: ElementRef, private  _render: Renderer
  ) {
  }

  ngOnInit() {
  this.initializeGame();

  }

  ngOnChanges() {
    this.initializeGame();
       this._render.setElementStyle(this._eref.nativeElement.getElementsByTagName('canvas')[0], 'width', this.playAreaWidth);
       this._render.setElementStyle(this._eref.nativeElement.getElementsByTagName('canvas')[0], 'height', this.playAreaHeight);
  }
  initializeGame(){
    this.snakeCanvas = document.getElementById('snakeCanvas');
    this.ctx= this.snakeCanvas.getContext('2d');
    this.cheight = this.snakeCanvas.height;
    this.cwidth = this.snakeCanvas.width;

    this.snakeMove= 'right';
    this.initializwSnake();
    this.randomFood();
    this.score = 0;
    this.game_loop = setInterval(this.paintSnakeCanvas(this.ctx), 60);
    if(this.game_loop != undefined) clearInterval(this.game_loop);
  }

  initializwSnake(){
    var snake_length= 5;
    this.navSnake= [];
    for(var i= snake_length - 1; i >= 0; i--){
      this.navSnake.push({
        x: i,
        y: 0
      });
    }

  }
  paint_cell(x, y)
  {
    this.ctx.fillStyle = 'blue';
    this.ctx.fillRect(x * this.cellWidth, y * this.cellWidth, this.cellWidth, this.cellWidth);
    this.ctx.strokeStyle = 'white';
    this.ctx.strokeRect(x * this.cellWidth, y * this.cellWidth, this.cellWidth, this.cellWidth);
  }

  randomFood(){
    this.snakeCell = {
      x:Math.round(Math.random() * (this.cwidth - this.cellWidth) / this.cellWidth),
      y:Math.round(Math.random() * (this.cheight - this.cellWidth) / this.cellWidth),
    }
  }
  check_collision(x, y, array)
  {
    // This function will check if the provided x/y coordinates exist
    // in an array of cells or not
    for( var i = 0; i < array.length; i++)
    {
      if(array[i].x == x && array[i].y == y)
        return true;
    }
    return false;
  }

  paintSnakeCanvas(ctx){
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, this.cwidth, this.cheight);
    ctx.strokeStyle = 'white';
    ctx.strokeRect(0, 0, this.cwidth, this.cheight);

    var snakex = this.navSnake[0].x;
    var snakey = this.navSnake[0].y;

    if(this.snakeMove== 'right') snakex++;
    else if (this.snakeMove == 'left') snakex--;
    else if(this.snakeMove == 'up') snakey--;
    else if(this.snakeMove == 'down') snakey++;

    if(snakex == -1 ||snakex == this.cwidth / this.cellWidth || snakey == -1 || snakey == this.cheight / this.cellWidth || this.check_collision(snakex,snakey, this.navSnake)){
      this.initializeGame();
      return;
    }

    if(snakex  == this.snakeCell.x && snakey == this.snakeCell.y){

      this.tail = {
        x: snakex,
        y: snakey
      };
      this.score++;

      this.randomFood();

    } else{
      this.tail = this.navSnake.pop();
      this.tail.x = snakex;
      this.tail.y= snakey;
    }

    this.navSnake.unshift(this.tail);

    for(var i = 0; i < this.navSnake.length; i++){
      var c = this.navSnake[i];
      this.paint_cell(c.x,c.y);
    }

    this.paint_cell(this.snakeCell.x, this.snakeCell.y);

    var score_test = 'Score: ' + this.score;

    this.ctx.fillText(score_test, 5, this.cheight-5);


  }
  @HostListener('document:keydown',['$event']) onkey(e){
  let key = e.key;

  if(key == 'ArrowLeft' && this.snakeMove!= 'right')this.snakeMove= 'left';
  else if(key == 'ArrowUp' && this.snakeMove != 'down') this.snakeMove = 'up';
  else if(key == 'ArrowRight' && this.snakeMove != 'left') this.snakeMove = 'right';
  else if(key == 'ArrowDown' && this.snakeMove != 'up') this.snakeMove = 'down';
  this.paintSnakeCanvas(this.ctx);
}

}

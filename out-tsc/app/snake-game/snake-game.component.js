var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ElementRef, Renderer, HostListener, Input } from '@angular/core';
export var SnakeGameComponent = (function () {
    function SnakeGameComponent(_eref, _render) {
        this._eref = _eref;
        this._render = _render;
        this.cellWidth = 10;
        this.snakeMove = 'right';
    }
    SnakeGameComponent.prototype.ngOnInit = function () {
        this.initializeGame();
    };
    SnakeGameComponent.prototype.ngOnChanges = function () {
        this.initializeGame();
        this._render.setElementStyle(this._eref.nativeElement.getElementsByTagName('canvas')[0], 'width', this.playAreaWidth);
        this._render.setElementStyle(this._eref.nativeElement.getElementsByTagName('canvas')[0], 'height', this.playAreaHeight);
    };
    SnakeGameComponent.prototype.initializeGame = function () {
        this.snakeCanvas = document.getElementById('snakeCanvas');
        this.ctx = this.snakeCanvas.getContext('2d');
        this.cheight = this.snakeCanvas.height;
        this.cwidth = this.snakeCanvas.width;
        this.snakeMove = 'right';
        this.initializwSnake();
        this.randomFood();
        this.score = 0;
        this.game_loop = setInterval(this.paintSnakeCanvas(this.ctx), 60);
        if (this.game_loop != undefined)
            clearInterval(this.game_loop);
    };
    SnakeGameComponent.prototype.initializwSnake = function () {
        var snake_length = 5;
        this.navSnake = [];
        for (var i = snake_length - 1; i >= 0; i--) {
            this.navSnake.push({
                x: i,
                y: 0
            });
        }
    };
    SnakeGameComponent.prototype.paint_cell = function (x, y) {
        this.ctx.fillStyle = 'blue';
        this.ctx.fillRect(x * this.cellWidth, y * this.cellWidth, this.cellWidth, this.cellWidth);
        this.ctx.strokeStyle = 'white';
        this.ctx.strokeRect(x * this.cellWidth, y * this.cellWidth, this.cellWidth, this.cellWidth);
    };
    SnakeGameComponent.prototype.randomFood = function () {
        this.snakeCell = {
            x: Math.round(Math.random() * (this.cwidth - this.cellWidth) / this.cellWidth),
            y: Math.round(Math.random() * (this.cheight - this.cellWidth) / this.cellWidth),
        };
    };
    SnakeGameComponent.prototype.check_collision = function (x, y, array) {
        // This function will check if the provided x/y coordinates exist
        // in an array of cells or not
        for (var i = 0; i < array.length; i++) {
            if (array[i].x == x && array[i].y == y)
                return true;
        }
        return false;
    };
    SnakeGameComponent.prototype.paintSnakeCanvas = function (ctx) {
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, this.cwidth, this.cheight);
        ctx.strokeStyle = 'white';
        ctx.strokeRect(0, 0, this.cwidth, this.cheight);
        var snakex = this.navSnake[0].x;
        var snakey = this.navSnake[0].y;
        if (this.snakeMove == 'right')
            snakex++;
        else if (this.snakeMove == 'left')
            snakex--;
        else if (this.snakeMove == 'up')
            snakey--;
        else if (this.snakeMove == 'down')
            snakey++;
        if (snakex == -1 || snakex == this.cwidth / this.cellWidth || snakey == -1 || snakey == this.cheight / this.cellWidth || this.check_collision(snakex, snakey, this.navSnake)) {
            this.initializeGame();
            return;
        }
        if (snakex == this.snakeCell.x && snakey == this.snakeCell.y) {
            this.tail = {
                x: snakex,
                y: snakey
            };
            this.score++;
            this.randomFood();
        }
        else {
            this.tail = this.navSnake.pop();
            this.tail.x = snakex;
            this.tail.y = snakey;
        }
        this.navSnake.unshift(this.tail);
        for (var i = 0; i < this.navSnake.length; i++) {
            var c = this.navSnake[i];
            this.paint_cell(c.x, c.y);
        }
        this.paint_cell(this.snakeCell.x, this.snakeCell.y);
        var score_test = 'Score: ' + this.score;
        this.ctx.fillText(score_test, 5, this.cheight - 5);
    };
    SnakeGameComponent.prototype.onkey = function (e) {
        var key = e.key;
        if (key == 'ArrowLeft' && this.snakeMove != 'right')
            this.snakeMove = 'left';
        else if (key == 'ArrowUp' && this.snakeMove != 'down')
            this.snakeMove = 'up';
        else if (key == 'ArrowRight' && this.snakeMove != 'left')
            this.snakeMove = 'right';
        else if (key == 'ArrowDown' && this.snakeMove != 'up')
            this.snakeMove = 'down';
        this.paintSnakeCanvas(this.ctx);
    };
    __decorate([
        Input(), 
        __metadata('design:type', Object)
    ], SnakeGameComponent.prototype, "playAreaWidth", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Object)
    ], SnakeGameComponent.prototype, "playAreaHeight", void 0);
    __decorate([
        HostListener('document:keydown', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], SnakeGameComponent.prototype, "onkey", null);
    SnakeGameComponent = __decorate([
        Component({
            selector: 'app-snake-game',
            templateUrl: './snake-game.component.html',
            styleUrls: ['./snake-game.component.css']
        }), 
        __metadata('design:paramtypes', [ElementRef, Renderer])
    ], SnakeGameComponent);
    return SnakeGameComponent;
}());
//# sourceMappingURL=/Users/navyaeetaram/PhpstormProjects/angularattack2017-gamespotgit/src/app/snake-game/snake-game.component.js.map
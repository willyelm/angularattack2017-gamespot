var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ElementRef, Renderer, Input } from '@angular/core';
export var TicTacToeComponent = (function () {
    function TicTacToeComponent(_eref, _render) {
        this._eref = _eref;
        this._render = _render;
    }
    TicTacToeComponent.prototype.ngOnInit = function () {
        this.setCanvas();
    };
    TicTacToeComponent.prototype.ngOnChanges = function () {
        this.setCanvas();
        this.createTicCanvas();
    };
    TicTacToeComponent.prototype.setCanvas = function () {
        console.log(this._eref.nativeElement.getElementsByTagName('div'));
        this._render.setElementStyle(this._eref.nativeElement.getElementsByTagName('div')[0], 'width', this.playAreaWidth);
        this._render.setElementStyle(this._eref.nativeElement.getElementsByTagName('div')[0], 'height', this.playAreaHeight);
        this._render.setElementStyle(this._eref.nativeElement.getElementsByTagName('div')[0], 'background-color', 'black');
    };
    TicTacToeComponent.prototype.createTicCanvas = function () {
        var _self = this;
        var parent = document.getElementById('tictacBoard');
        for (var i = 0; i < 9; i++) {
            var block = document.createElement('div');
            block.setAttribute('id', 'block-' + i);
            block.addEventListener('click', function () {
                _self.writePointer(event.target);
            });
            parent.appendChild(block);
            this._render.setElementStyle(document.getElementById('block-' + i), 'width', '100px');
            this._render.setElementStyle(document.getElementById('block-' + i), 'height', '100px');
            this._render.setElementStyle(document.getElementById('block-' + i), 'border', '1px solid black');
            this._render.setElementStyle(document.getElementById('block-' + i), 'background-color', 'mediumslateblue');
            this._render.setElementStyle(document.getElementById('block-' + i), 'float', 'left');
            this._render.setElementStyle(document.getElementById('block-' + i), 'cursor', 'pointer');
            this._render.setElementStyle(document.getElementById('block-' + i), 'text-align', 'center');
            this._render.setElementStyle(document.getElementById('block-' + i), 'font-size', '75px');
            this._render.setElementStyle(document.getElementById('block-' + i), 'font-family', 'fantasy');
        }
        console.log(document.getElementById('tictacBoard'));
        this._render.setElementStyle(document.getElementById('tictacBoard'), 'margin-top', '20%');
        this._render.setElementStyle(document.getElementById('tictacBoard'), 'margin-left', '35%');
    };
    TicTacToeComponent.prototype.selectPointer = function (e) {
        if (this.pointer == undefined) {
            this.pointer = e.target.innerHTML;
            this.AiPointer = this.pointer == ' x ' ? ' o ' : ' x ';
            console.log(this.AiPointer, this.pointer);
        }
    };
    TicTacToeComponent.prototype.winner = function (a) {
        if (a == this.pointer) {
            window.alert('Congratulations! You won the game');
        }
        else {
            window.alert('You Lost! Better luck next time. ');
        }
        for (var i = 0; i < 9; i++) {
            document.getElementById('block-' + i).innerHTML = '';
        }
        this.pointer = undefined;
        this.AiPointer = undefined;
    };
    TicTacToeComponent.prototype.writePointer = function (e) {
        var tiles = [];
        if (this.pointer != undefined && e.innerHTML == '') {
            e.innerHTML = this.pointer;
            for (var i = 0; i < 9; i++) {
                tiles[i] = document.getElementById('block-' + i).innerHTML;
            }
            console.log(tiles);
            this.checkBoxes(tiles, this.pointer);
            this.checkBoxes(tiles, this.AiPointer);
        }
    };
    TicTacToeComponent.prototype.checkBoxes = function (tiles, checkPointer) {
        if (tiles[0] == checkPointer && tiles[1] == checkPointer && tiles[2] == checkPointer) {
            this.winner(checkPointer);
        }
        else if (tiles[3] == checkPointer && tiles[4] == checkPointer && tiles[5] == checkPointer) {
            this.winner(checkPointer);
        }
        else if (tiles[6] == checkPointer && tiles[7] == checkPointer && tiles[8] == checkPointer) {
            this.winner(checkPointer);
        }
        else if (tiles[0] == checkPointer && tiles[3] == checkPointer && tiles[6] == checkPointer) {
            this.winner(checkPointer);
        }
        else if (tiles[1] == checkPointer && tiles[4] == checkPointer && tiles[7] == checkPointer) {
            this.winner(checkPointer);
        }
        else if (tiles[2] == checkPointer && tiles[5] == checkPointer && tiles[8] == checkPointer) {
            this.winner(checkPointer);
        }
        else if (tiles[0] == checkPointer && tiles[4] == checkPointer && tiles[8] == checkPointer) {
            this.winner(checkPointer);
        }
        else if (tiles[2] == checkPointer && tiles[4] == checkPointer && tiles[6] == checkPointer) {
            this.winner(checkPointer);
        }
    };
    __decorate([
        Input(), 
        __metadata('design:type', Object)
    ], TicTacToeComponent.prototype, "playAreaWidth", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Object)
    ], TicTacToeComponent.prototype, "playAreaHeight", void 0);
    TicTacToeComponent = __decorate([
        Component({
            selector: 'app-tic-tac-toe',
            templateUrl: './tic-tac-toe.component.html',
            styleUrls: ['./tic-tac-toe.component.css']
        }), 
        __metadata('design:paramtypes', [ElementRef, Renderer])
    ], TicTacToeComponent);
    return TicTacToeComponent;
}());
//# sourceMappingURL=/Users/navyaeetaram/PhpstormProjects/angularattack2017-gamespotgit/src/app/tic-tac-toe/tic-tac-toe.component.js.map
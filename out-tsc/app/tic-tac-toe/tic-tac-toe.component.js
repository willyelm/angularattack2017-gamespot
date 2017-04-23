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
        }
        console.log(document.getElementById('tictacBoard'));
        this._render.setElementStyle(document.getElementById('tictacBoard'), 'margin-top', '20%');
        this._render.setElementStyle(document.getElementById('tictacBoard'), 'margin-left', '35%');
    };
    TicTacToeComponent.prototype.selectPointer = function (e) {
        console.log(e.target.innerHTML);
        this.pointer = e.target.innerHTML;
    };
    TicTacToeComponent.prototype.writePointer = function (e) {
        console.log(e);
        e.innerHTML = 'x';
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
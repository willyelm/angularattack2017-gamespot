var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ElementRef, Renderer } from '@angular/core';
export var AppComponent = (function () {
    function AppComponent(_eref, _render) {
        this._eref = _eref;
        this._render = _render;
        this.title = 'Game Stop !!!';
        this.gameTypes = ['Snake', 'Tic Tac Toe', 'Bucket Fill'];
        this.gameSelect = 'snake';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getWidthHeight();
    };
    AppComponent.prototype.ngOnChanges = function () {
        this.getWidthHeight();
    };
    AppComponent.prototype.getWidthHeight = function () {
        this.playAreaWidth = document.getElementById('playArea').clientWidth + 'px';
        this.playAreaHeight = document.getElementById('playArea').clientHeight + 'px';
    };
    AppComponent.prototype.gameClick = function (e) {
        this.gameSelect = e.target.innerHTML.toLowerCase();
    };
    AppComponent = __decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }), 
        __metadata('design:paramtypes', [ElementRef, Renderer])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/navyaeetaram/PhpstormProjects/angularattack2017-gamespotgit/src/app/app.component.js.map
import { async, TestBed } from '@angular/core/testing';
import { TicTacToeComponent } from './tic-tac-toe.component';
describe('TicTacToeComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [TicTacToeComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(TicTacToeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/navyaeetaram/PhpstormProjects/angularattack2017-gamespotgit/src/app/tic-tac-toe/tic-tac-toe.component.spec.js.map
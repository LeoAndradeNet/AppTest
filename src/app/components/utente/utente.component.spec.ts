import { TestBed, async } from '@angular/core/testing';
import { UtenteComponent } from './utente.component';

describe('UtenteComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                UtenteComponent
            ]
        }).compileComponents();
    }));
    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(UtenteComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
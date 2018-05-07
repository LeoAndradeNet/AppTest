import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { UtenteComponent } from './utente.component';
import { AppModule } from '../../app.module';

describe('UtenteComponent', () => {
 
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AppModule]
        }).compileComponents();
    }));

    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(UtenteComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
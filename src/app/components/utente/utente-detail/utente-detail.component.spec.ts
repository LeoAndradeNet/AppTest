import { TestBed, async } from '@angular/core/testing';
import { UtenteDetailComponent } from './utente-detail.component';
import { AppModule } from '../../../app.module';

describe('UtenteDetailComponet', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AppModule]
        }).compileComponents();
    }));
    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(UtenteDetailComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
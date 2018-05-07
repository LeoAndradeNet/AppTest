import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UtenteComponent } from './components/utente/utente.component';


const routes: Routes = [
    { path: '', redirectTo: '/utente', pathMatch: 'full' },
    { path: 'utente', component: UtenteComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
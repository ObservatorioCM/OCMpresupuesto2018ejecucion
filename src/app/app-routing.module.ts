import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { IndiceComponent } from './programas/indice/indice.component';
import { AboutComponent } from './programas/about/about.component';
import { ProgramaComponent } from './programas/programa/programa.component';
import { ProgramaAniosComponent } from './programas/programa/programa-anios/programa-anios.component';
import { EconomicosComponent } from './programas/economicos/economicos.component';

const app_routes: Routes = [
    { path: 'home', component: IndiceComponent },
    { path: 'about', component: AboutComponent },
    { path: 'programa', component: ProgramaComponent },
    { path: 'economicos', component: EconomicosComponent },
    { path: 'programaAnios', component: ProgramaAniosComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
    imports: [
        RouterModule.forRoot( app_routes, { useHash: true } )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }

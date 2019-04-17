import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';


// Rutas
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { IndiceComponent } from './programas/indice/indice.component';
import { AboutComponent } from './programas/about/about.component';
import { ProgramaComponent } from './programas/programa/programa.component';
import { CardBasicoComponent } from './shared/cards/card-basico/card-basico.component';
import { CardInfoProgramaComponent } from './shared/cards/card-info-programa/card-info-programa.component';
import { ProgramaAniosComponent } from './programas/programa/programa-anios/programa-anios.component';
import { EconomicosComponent } from './programas/economicos/economicos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndiceComponent,
    AboutComponent,
    ProgramaComponent,
    CardBasicoComponent,
    CardInfoProgramaComponent,
    ProgramaAniosComponent,
    EconomicosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSelectModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

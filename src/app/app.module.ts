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
import { IndiceComponent } from './indice/indice.component';
import { AboutComponent } from './about/about.component';
import { GastosPorEconomicoComponent } from './gastos/gastos-por-economico/gastos-por-economico.component';
import { GastosPorProgramaComponent } from './gastos/gastos-por-programa/gastos-por-programa.component';
import { IngresosPorEconomicoComponent } from './ingresos/ingresos-por-economico/ingresos-por-economico.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndiceComponent,
    AboutComponent,
    GastosPorEconomicoComponent,
    GastosPorProgramaComponent,
    IngresosPorEconomicoComponent
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

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {routing, appRoutingProviders} from './app.routing';

import { AppComponent } from './app.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { ConsumosComponent } from './components/consumos/consumos.component';

@NgModule({
  declarations: [
    AppComponent, ClienteComponent, TarjetasComponent, ConsumosComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { ConsumosComponent } from './components/consumos/consumos.component';

const appRoutes: Routes = [
    {path: '', component: AppComponent},
    {path: 'clientes', component: ClienteComponent},
    {path: 'tarjetas/:idCliente', component: TarjetasComponent},
    {path: 'consumos/:idTarjeta', component: ConsumosComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

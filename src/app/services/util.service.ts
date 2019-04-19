import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UtilService{
    public clientes = [
        {
            id: 'pab1', nombre: 'Pablo Velilla', direccion: 'Cumbres', ciudad: 'Envigado', telefono: 6673080, numeroTarjetasAsociadas: 2
        },
        {
            id: 'car2', nombre: 'Carmen Villalobos', direccion: 'Loma de los Bernal', ciudad: 'Medellin', telefono: 1234567, numeroTarjetasAsociadas: 2
        }
    ];

    public tarjetas = [
        {
            idCliente: 'pab1', idTarjeta: 1, numeroTarjeta: '1234 5678 9123 4567', ccv: 165, tipoTarjeta: 'Debito'
        },
        {
            idCliente: 'pab1', idTarjeta: 2, numeroTarjeta: '4788 8755 2237 4587', ccv: 243, tipoTarjeta: 'Credito'
        },
        {
            idCliente: 'car2', idTarjeta: 3, numeroTarjeta: '4588 6589 3215 4332', ccv: 389, tipoTarjeta: 'Debito'
        },
        {
            idCliente: 'car2', idTarjeta: 4, numeroTarjeta: '1125 5487 8865 3312', ccv: 812, tipoTarjeta: 'Credito'
        }
    ];

    public consumos = [
        {
            idConsumo: 1, idTarjeta: 1, fechaConsumo: '2019-02-03', monto: 265000, descripcion: 'Pago en Euro Envigado Gualandayes'
        },
        {
            idConsumo: 2, idTarjeta: 1, fechaConsumo: '2019-01-15', monto: 100000, descripcion: 'Pago en Terminal Norte Expresso Brasilia'
        },
        {
            idConsumo: 3, idTarjeta: 1, fechaConsumo: '2019-04-10', monto: 35000, descripcion: 'Pago en Subway Aeropuerto Rionegro'
        },
        {
            idConsumo: 4, idTarjeta: 3, fechaConsumo: '2018-09-03', monto: 25000, descripcion: 'Pago en Cine Colombia CC Galerias'
        },
        {
            idConsumo: 5, idTarjeta: 4, fechaConsumo: '2018-11-20', monto: 150000, descripcion: 'Pago en Proteinas y Suplementos CC San Diego'
        }
    ];


    
    getClientes = () =>{
        return this.clientes;
    };

    getTarjetasCuenta = () => {
        //console.log(this.tarjetas.length);
        return this.tarjetas.length;
    };

    getConsumosCuenta = () => {
        return this.consumos.length;
    };

    getTarjetasPorCliente = idCliente => {
        const tarjetas = this.tarjetas.filter(t => t.idCliente === idCliente);
        return tarjetas;
    };

    getConsumosPorTarjeta = idTarjeta => {
        const consumosPorTarjeta = this.consumos.filter(c => c.idTarjeta == idTarjeta);
        return consumosPorTarjeta;
    };

    //envia a la API para actualizar en BD la lista de clientes
    actualizarListaClientes = listaClientes => {
        this.clientes = listaClientes;
    };

    //envia a la API para actualizar en BD la lista de tarjetas
    actualizarListaTarjetas = listaTarjetas => {
        this.tarjetas = listaTarjetas;
    };
    
    //envia a la API para actualizar en BD la lista de consumos
    actualizarListaConsumos = listaConsumos => {
        this.consumos = listaConsumos;
    };
}
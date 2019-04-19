import { Component } from '@angular/core';
import { UtilService } from '../../services/util.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { Tarjeta } from '../../model/tarjeta';

@Component({
    selector: 'tarjetas',
    templateUrl: './tarjetas.component.html',
    styleUrls: ['./tarjetas.component.less'],
    providers: [UtilService]
})

export class TarjetasComponent{
    public title: string = "Tarjetas";
    public parametro;
    public parametro2;
    public listaTarjetas:any;
    public tarjeta:Tarjeta;
    public muestraFormulario:boolean=false;
    public muestraGuardar:boolean=false;
    public muestraActualizar:boolean=false;
    public ultimoId;
    public cuentaTarjetas:any;

    constructor(
		private _route: ActivatedRoute,
        private _router: Router,
        private _utilService: UtilService

    ){
        this.tarjeta = new Tarjeta("","","","","");
    }

    ngOnInit(){
        this.cuentaTarjetas = this._utilService.getTarjetasCuenta();
        this.ultimoId = this.cuentaTarjetas+1;
        this.getTarjetasPorCliente();
    }

    getTarjetasPorCliente = () => {
        this._route.params.forEach((params: Params) => {
            this.parametro = params['idCliente'];
        });

        const idCliente = this.parametro;
        const tarjetas = this._utilService.getTarjetasPorCliente(idCliente);
        this.listaTarjetas = tarjetas;
    };

    nuevaTarjeta(){
        this.muestraFormulario = true;
        this.muestraActualizar = false;
        this.muestraGuardar = true;
    }

    onSubmit(){
        let tarjeta:Tarjeta = this.tarjeta;
        const idTarjeta = this.ultimoId;
        let {numeroTarjeta, ccv, tipoTarjeta} = tarjeta;

        const idCliente = this.parametro;

        let nuevaTarjeta = {
            idCliente,
            idTarjeta, 
            numeroTarjeta, 
            ccv, 
            tipoTarjeta
        }

        this.listaTarjetas.push(nuevaTarjeta);
        this._utilService.actualizarListaTarjetas(this.listaTarjetas);
        this.muestraFormulario = false;
        this.ultimoId = this.ultimoId+1;
    }

    enviarAModificar = tarjeta =>{
        this.tarjeta = tarjeta;
        this.muestraFormulario = true;
        this.muestraGuardar = false;
        this.muestraActualizar = true;
    };

    modificarTarjeta = () =>{
        this.muestraFormulario = false;
    }
    
    eliminarTarjeta = idTarjeta => {
        const nuevaListaTarjetas = this.listaTarjetas.filter(t => t.idTarjeta!==idTarjeta);
        this.listaTarjetas = nuevaListaTarjetas;
    };

    regresarPrincipal = () =>{
        this._router.navigate(['/clientes']);
    };
    
    cancelarRegistro = () => {
        this.muestraFormulario = false;
    };
    
}
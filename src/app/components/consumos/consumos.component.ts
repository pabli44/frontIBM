import { Component } from "@angular/core";
import { UtilService } from '../../services/util.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { Consumo } from '../../model/consumo' ;


@Component({
    selector: 'consumos',
    templateUrl: './consumos.component.html',
    styleUrls: ['./consumos.component.less'],
    providers: [UtilService]
})


export class ConsumosComponent{
    public title:string = 'Consumos';
    public parametro;
    public listaConsumos:any;
    public consumo:Consumo;
    public muestraFormulario:boolean=false;
    public muestraGuardar:boolean=false;
    public muestraActualizar:boolean=false;
    public ultimoId;
    public cuentaConsumos:any;

    constructor(
		private _route: ActivatedRoute,
        private _router: Router,
        private _utilService: UtilService

    ){
        this.consumo = new Consumo("","","","","");
    }
    
    ngOnInit(){
        this.cuentaConsumos = this._utilService.getConsumosCuenta();
        this.ultimoId = this.cuentaConsumos+1;
        this.getConsumosPorTarjeta();
    }

    getConsumosPorTarjeta = () => {
        this._route.params.forEach((params: Params) => {
            this.parametro = params['idTarjeta'];
        });
        
        const idTarjeta = this.parametro;
        const consumos = this._utilService.getConsumosPorTarjeta(idTarjeta);
        this.listaConsumos = consumos;
    };

    nuevoConsumo(){
        this.muestraFormulario = true;
        this.muestraActualizar = false;
        this.muestraGuardar = true;
    }

    onSubmit(){
        let consumo:Consumo = this.consumo;
        const idConsumo = this.ultimoId;
        let {fechaConsumo, monto, descripcion} = consumo;

        const idTarjeta = this.parametro;

        let nuevoConsumo = {
            idConsumo,
            idTarjeta, 
            fechaConsumo, 
            monto, 
            descripcion
        }

        this.listaConsumos.push(nuevoConsumo);
        this._utilService.actualizarListaConsumos(this.listaConsumos);
        this.muestraFormulario = false;
        this.ultimoId = this.ultimoId+1;
    }

    eliminarConsumo = idConsumo => {
        const nuevaListaConsumos = this.listaConsumos.filter(c => c.idConsumo!==idConsumo);
        this.listaConsumos = nuevaListaConsumos;
    };

    enviarAModificar = consumo =>{
        this.consumo = consumo;
        this.muestraFormulario = true;
        this.muestraGuardar = false;
        this.muestraActualizar = true;
    };

    modificarConsumo = () =>{
        this.muestraFormulario = false;
    }

    regresarPrincipal = () =>{
        this._router.navigate(['/clientes']);
    };

    cancelarRegistro = () => {
        this.muestraFormulario = false;
    };

}

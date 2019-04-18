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
    public muestraFormularioEditar:boolean=false;


    constructor(
		private _route: ActivatedRoute,
        private _router: Router,
        private _utilService: UtilService

    ){
        this.consumo = new Consumo("","","","","");
    }
    
    ngOnInit(){
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

    eliminarConsumo = idConsumo => {
        const nuevaListaConsumos = this.listaConsumos.filter(c => c.idConsumo!==idConsumo);
        this.listaConsumos = nuevaListaConsumos;
    };

    enviarAModificar = consumo =>{
        this.consumo = consumo;
        this.muestraFormularioEditar = true;
    };
    
    modificarConsumo = () => {
        this.muestraFormularioEditar = false;
    };

    regresarPrincipal = () =>{
        this._router.navigate(['/clientes']);
    };
}

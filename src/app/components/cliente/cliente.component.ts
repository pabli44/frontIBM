import { Component } from '@angular/core';
import { UtilService } from '../../services/util.service';
import { Cliente } from '../../model/cliente';

@Component({
    selector: 'cliente',
    templateUrl: './cliente.component.html',
    styleUrls: ['./cliente.component.less'],
    providers: [UtilService]
})


export class ClienteComponent{
    public title:string = 'Clientes';
    public muestraLista:boolean=false;
    public muestraFormulario:boolean=false;
    public muestraGuardar:boolean=false;
    public muestraActualizar:boolean=false;
    public cliente:Cliente;
    public listaClientes:any;


    constructor(private _utilService: UtilService){
        this.cliente = new Cliente("","","","","");
    }

    ngOnInit(){
        this.listaClientes = this.getClientes();
        this.listaClientes.length>0?this.muestraLista=true:false;
    }

    getClientes = () =>{
        return this._utilService.getClientes();
    };

    getHistorialPorCliente = cliente => {
        return this._utilService.getTarjetasPorCliente(cliente);       
    }

    nuevoCliente(){
        this.muestraFormulario = true;
        this.muestraActualizar = false;
        this.muestraGuardar = true;
    }

    onSubmit(){
        let cliente:Cliente = this.cliente;
        let id = this.listaClientes.length+1;
        let {nombre, direccion, ciudad, telefono, numeroTarjetasAsociadas} = cliente;

        id = nombre.substr(0,3).toLowerCase() + id;
        
        let nuevoCliente = {
            id, 
            nombre, 
            direccion, 
            ciudad, 
            telefono, 
            numeroTarjetasAsociadas
        }

        this.listaClientes.push(nuevoCliente);
        this._utilService.actualizarListaClientes(this.listaClientes);
        this.muestraFormulario = false;
    }

    enviarAModificar = cliente =>{
        this.cliente = cliente;
        this.muestraFormulario = true;
        this.muestraGuardar = false;
        this.muestraActualizar = true;
    };

    modificarCliente = () =>{
        this.muestraFormulario = false;
    }

    eliminarCliente = idCliente =>{
        const nuevalistaClientes = this.listaClientes.filter(c => c.id!==idCliente);
        this.listaClientes = nuevalistaClientes;
        if(this.listaClientes.length==0){
            this.muestraLista = false;
        }

    };

    cancelarRegistro = () => {
        this.muestraFormulario = false;
    };


}

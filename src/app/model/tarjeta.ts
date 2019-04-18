export class Tarjeta{
    constructor(
        public idCliente:string,
        public idTarjeta:string,
        public numeroTarjeta:string,
        public ccv:string,
        public tipoTarjeta:string
    ){}
}
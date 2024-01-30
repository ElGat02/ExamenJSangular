import { DetalleFactura } from "./DetalleFactura";
import { Cliente } from "./cliente";

export class Factura {
    

    codigo?: number;
    numero?: string;
    //cliente: Cliente = new Cliente(); // Cliente inicializado
    cliente: Cliente = new Cliente(); 
    total?: number;
    fechaEmision?: Date;

    detalles: DetalleFactura[] = []; 
}



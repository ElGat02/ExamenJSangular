import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/domain/cliente';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-recarga',
  templateUrl: './recarga.component.html',
  styleUrls: ['./recarga.component.scss']
})
export class RecargaComponent implements OnInit {

  clientes: Cliente[] = []; 
  clienteSeleccionado: number | undefined;
  
  recarga = {
    numeroMovil: '',
    operador: '',
    monto: '',
    fecha: Date
  };

  resultado?: string;

  constructor(private clientesService: ClientesService) { }

  ngOnInit(): void {
    this.clientesService.getClientes().subscribe(
      (data: Cliente[]) => {
        this.clientes = data;
      },
      error => {
        console.error('Error al obtener la lista de clientes: ', error);
      }
    );
  }

  guardarRecarga() {
    this.clientesService.realizarRecarga(this.recarga).subscribe(
      response => {
        this.resultado = 'Recarga realizada con éxito: ' + response.mensaje;
        
        this.ngOnInit();
      },
      error => {
        console.error('Error en la recarga: ', error);
        this.resultado = 'Error en la recarga: ' + (error.error.mensaje || error.message);
      }
    );
  }

  
}

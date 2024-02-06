import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments';
import { Cliente } from '../domain/cliente';
@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  constructor(private http: HttpClient) { }

  getClientes(){
    let url = environment.WS_PATH + "/clientes/list"
    return this.http.get<any>(url)
  }

  saveCliente(cliente: Cliente) {
    let url = environment.WS_PATH + "/clientes";
    return this.http.post<any>(url, cliente);
  }

  realizarRecarga(recarga: any) {
    const url = environment.WS_PATH + "/recargaMovil";
    return this.http.post<any>(url, recarga);
  }


  getTransferencias() {
    const url = environment.WS_PATH + "/transferencias"; 
    return this.http.get<any>(url);
  }

}

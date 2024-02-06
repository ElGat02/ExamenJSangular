import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { RecargaComponent } from './pages/recarga/recarga.component';

const routes: Routes = [
  {path:"paginas/clientes", component: ClientesComponent},
  {path:"paginas/recargas", component: RecargaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

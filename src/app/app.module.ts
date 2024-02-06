import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule } from '@angular/forms';



import { HttpClientModule } from '@angular/common/http';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { environment } from 'src/environments/environments';
import { RecargaComponent } from './pages/recarga/recarga.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ClientesComponent,
    RecargaComponent,

  ],
  imports: [
 
    BrowserModule,
    AppRoutingModule,
    FormsModule,  
    HttpClientModule
  ],
  providers: [
    
],
  bootstrap: [AppComponent]
})
export class AppModule { }


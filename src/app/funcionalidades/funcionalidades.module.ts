import { FormsModule } from '@angular/forms';
import { DetalhesComponent } from './home/detalhes/detalhes.component';
import { FuncionalidadesRoutingModule } from './funcionalidades-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SimulacaoCgiComponent } from './simulacao-cgi/simulacao-cgi.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { ContatoComponent } from './contato/contato.component';
import { ListaProdutoComponent } from './produtos/lista-produto/lista-produto.component';
import { ProdutoService } from '../Servicos/produto.service';
import { HttpClientModule } from '@angular/common/http';

import { registerLocaleData } from '@angular/common';
import localPt from '@angular/common/locales/pt';
registerLocaleData(localPt);

// Funcionalidades Routing
@NgModule({
  declarations: [
    HomeComponent,
    DetalhesComponent,
    SimulacaoCgiComponent,
    DataBindingComponent,
    ContatoComponent,
    ListaProdutoComponent
  ],
  imports: [
    CommonModule,
    FuncionalidadesRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ProdutoService
  ],
})
export class FuncionalidadesModule { }

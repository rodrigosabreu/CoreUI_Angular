import { ListaProdutoComponent } from './produtos/lista-produto/lista-produto.component';
import { ContatoComponent } from './contato/contato.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetalhesComponent } from './home/detalhes/detalhes.component';
import { SimulacaoCgiComponent } from './simulacao-cgi/simulacao-cgi.component';

const routes: Routes = [
  //{path: 'home', component: HomeComponent}

  {path: 'simulacao-cgi', component: SimulacaoCgiComponent, data: { title: 'Simulação CGI'}},
  {path: 'data-binding', component: DataBindingComponent, data: { title: 'Data Binding'}},
  {path: 'contato', component: ContatoComponent, data: { title: 'Contato'}},
  {path: 'produtos', component: ListaProdutoComponent, data: { title: 'Lista de Produtos'}},


  {path: 'home', component: HomeComponent, data: { title: 'Página Inicial'},
    children:[{
      path: 'detalhes', component: DetalhesComponent
    }]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes )],
  exports: [RouterModule]
})
export class FuncionalidadesRoutingModule { }







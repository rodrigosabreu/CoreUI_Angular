import { ProdutoService } from './../../../Servicos/produto.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from './../../../Servicos/produto';

@Component({
  selector: 'app-listar-produto',
  templateUrl: './lista-produto.component.html'
})
export class ListaProdutoComponent implements OnInit {

  public produtos!: Produto[];

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {

      /*this.produtoService.obterProdutos()
      .subscribe(p => {this.produtos = p; console.log(p)},
      error => console.log(error));*/


      this.produtoService.obterProdutos()
      .subscribe({
        next: p => {this.produtos = p; console.log(p)},
        error: e => {console.log(e)},
        complete: () => {console.log('Requisição de produtos completada')}
      });
  }

}

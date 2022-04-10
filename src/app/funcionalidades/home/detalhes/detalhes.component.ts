import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html'
})
export class DetalhesComponent implements OnInit {

  @Input() valor_passado : any

  constructor() {



  }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit {

  @Input()
  empleado:Empleado=new Empleado("","","",0);

  @Input()
  i:number=0;

  detalles = [''];

  addDetalle(detalle:string){
    this.detalles.push(detalle)
  }

  constructor() { }

  ngOnInit(): void {
  }

}

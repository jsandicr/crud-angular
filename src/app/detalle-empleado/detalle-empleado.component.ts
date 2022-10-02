import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-detalle-empleado',
  templateUrl: './detalle-empleado.component.html',
  styleUrls: ['./detalle-empleado.component.css']
})
export class DetalleEmpleadoComponent implements OnInit {

  @Output() detallesEmpleados = new EventEmitter<string>();

  addDetalle(value:string){
    this.detallesEmpleados.emit(value);
    this.e.muestraMensaje("Se creo el detalle de empleado: "+value)
  }

  constructor(private e:ServicioEmpleadosService) { }

  ngOnInit(): void {
  }

}

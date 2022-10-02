import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-actualiza',
  templateUrl: './actualiza.component.html',
  styleUrls: ['./actualiza.component.css']
})
export class ActualizaComponent implements OnInit {

  empleados:Empleado[]=[];

  cuadroNombre:string = "";
  cuadroApellido:string = "";
  cuadroCargo:string = "";
  cuadroSalario:number = 0;
  indice = 0;
  accion:number = 0;

  actualizaEmpleado(){
    let empleado = new Empleado(this.cuadroNombre,this.cuadroApellido, this.cuadroCargo, this.cuadroSalario)
    this.e2.actualizaEmpleado(this.indice, empleado)
    this.router.navigate([''])
  }

  eliminaEmpleado(){
    this.e2.eliminaEmpleado(this.indice)
    this.router.navigate([''])
  }

  volver(){
    this.router.navigate([''])
  }

  constructor(private router:Router, private e:ServicioEmpleadosService, private e2:EmpleadosService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.accion = this.route.snapshot.queryParams['accion']
    this.empleados = this.e2.empleados;
    this.indice = this.route.snapshot.params['id']
    let empleado:Empleado = this.e2.encontrarEmpleado(this.indice);
    this.cuadroNombre = empleado.nombre
    this.cuadroApellido = empleado.apellido
    this.cuadroCargo = empleado.cargo
    this.cuadroSalario = empleado.salario
  }

}
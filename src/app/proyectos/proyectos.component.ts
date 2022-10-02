import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  volver(){
    this.router.navigate([''])
  }

  empleados:Empleado[]=[];

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;

  crearEmpleado(){
    let empleado = new Empleado(this.cuadroNombre,this.cuadroApellido, this.cuadroCargo, this.cuadroSalario)
    this.e2.addEmpleadoServicio(empleado)
    this.router.navigate([''])
  }

  constructor(private router:Router, private e:ServicioEmpleadosService, private e2:EmpleadosService) { }

  ngOnInit(): void {
    this.empleados=this.e2.empleados;
  }

}

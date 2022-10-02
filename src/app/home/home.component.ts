import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Lista de Empleados';

  constructor(private e:ServicioEmpleadosService, private e2:EmpleadosService) { }

  ngOnInit(): void {
    //this.empleados=this.e2.empleados;
    this.e2.getEmpleados().subscribe(
      response=>{
        alert("Get Empleados")
        this.empleados = Object.values(response);
        this.e2.setEmpleados(this.empleados);
      }
    );
  }

  empleados:Empleado[]=[];

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;

  crearEmpleado(){
    let empleado = new Empleado(this.cuadroNombre,this.cuadroApellido, this.cuadroCargo, this.cuadroSalario)
    this.e2.addEmpleadoServicio(empleado)
  }

}

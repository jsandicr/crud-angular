import { Injectable } from "@angular/core";
import { DataService } from "./data.service";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";

@Injectable()
export class EmpleadosService{

    constructor(private alert:ServicioEmpleadosService, private data:DataService){

    }

    getEmpleados(){
        return this.data.getEmpleados();
    }

    empleados:Empleado[]=[];

    setEmpleados(empleado:Empleado[]){
        this.empleados = empleado;
    }

    /*empleados:Empleado[]=[
        new Empleado("Jorge","Sandi","Presidente",90000),
        new Empleado("Ana","Gonzalez","Secretaria",5000),
        new Empleado("Pedro","Martinez","CEO",40000),
        new Empleado("Carlos","Cardenaz","Programador",10000)
      ];*/

    addEmpleadoServicio(empleado:Empleado){
        this.alert.muestraMensaje("Se agrego el empleado "+empleado.nombre);
        this.empleados.push(empleado);
        this.data.saveEmpleado(this.empleados);
    }

    actualizaEmpleado(id:number, empleado:Empleado){
        let empleadoModificado = this.empleados[id];
        empleadoModificado.nombre = empleado.nombre;
        empleadoModificado.apellido = empleado.apellido;
        empleadoModificado.cargo = empleado.cargo;
        empleadoModificado.salario = empleado.salario;
        this.data.updateEmpleado(id, empleado);
    }

    eliminaEmpleado(id:number){
        this.empleados.splice(id, 1);
        this.data.deleteEmpleado(id);
    }

    encontrarEmpleado(id:number){
        return this.empleados[id]
    }
}
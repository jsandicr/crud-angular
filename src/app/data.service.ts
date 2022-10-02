import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";

@Injectable()
export class DataService{
    constructor(private httpClient:HttpClient){}

    saveEmpleado(empleado:Empleado[]){
        this.httpClient.put('https://clientes-angular-75657-default-rtdb.firebaseio.com/datos.json', empleado).subscribe(
            response => console.log("Se han guardados los empleados!", response),
            error => console.log("Error" + error)
        );
    }

    getEmpleados(){
        return this.httpClient.get('https://clientes-angular-75657-default-rtdb.firebaseio.com/datos.json');
    }

    updateEmpleado(id:number, empleado:Empleado){
        this.httpClient.put('https://clientes-angular-75657-default-rtdb.firebaseio.com/datos/'+id+'.json', empleado).subscribe(
            response => console.log("Se actualizo con exito!", response),
            error => console.log('Error ' + error)
        );
    }

    deleteEmpleado(id:number){
        this.httpClient.delete('https://clientes-angular-75657-default-rtdb.firebaseio.com/datos/'+id+'.json').subscribe(
            response => console.log("Se elimino con exito!", response),
            error => console.log('Error ' + error)
        );
    }
}
// Importa las librerías necesarias de Angular para trabajar con HTTP y RxJS
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Estudiante } from './estudiante';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// El decorador Injectable hace que el servicio pueda ser inyectado en otros componentes
@Injectable({
  providedIn: 'root' // Define que el servicio está disponible a nivel de toda la aplicación
})
export class EstudiantesService {

  // URL base de la API para gestionar estudiantes
  private urlEndpoint='http://localhost:8080/api/estudiantes'

  // Definición de los encabezados HTTP, especificando que se enviarán datos en formato JSON
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'})

  // Constructor que inyecta el HttpClient para hacer peticiones HTTP
  constructor(private http:HttpClient) { }

  // Método para obtener todos los estudiantes desde la API
  getEstudiantes():Observable<Estudiante[]>{

    //return of (ESTUDIANTES);
    // Regresa un observable que realiza una petición GET a la URL del endpoint
    return this.http.get(this.urlEndpoint).pipe(
      // Transforma la respuesta a un arreglo de objetos Estudiante
      map((response)=>response as Estudiante[])
    )
  }

  // Método para crear un nuevo estudiante a través de la API
  create(estudiante:Estudiante):Observable<Estudiante>{
    // Realiza una petición POST para agregar un estudiante a la API, enviando el estudiante con los encabezados definidos
    return this.http.post<Estudiante>(this.urlEndpoint, estudiante, {headers:this.httpHeaders})
  }

  // Método para obtener un estudiante específico por su ID
  getEstudiante(id: any):Observable<Estudiante>{
    // Realiza una petición GET para obtener un estudiante específico
    return this.http.get<Estudiante>(`${this.urlEndpoint}/${id}`)
  }

  // Método para actualizar los datos de un estudiante
  update(estudiante:Estudiante):Observable<Estudiante>{
    // Realiza una petición PUT para actualizar el estudiante en la API con los nuevos datos
    return this.http.put<Estudiante>(`${this.urlEndpoint}/${estudiante.id}`, estudiante, {headers:this.httpHeaders})
  }

  // Método para eliminar un estudiante por su ID
  delete(id:number):Observable<Estudiante>{
    // Realiza una petición DELETE para eliminar el estudiante por su ID
    return this.http.delete<Estudiante>(`${this.urlEndpoint}/${id}`, {headers:this.httpHeaders})
  }
}

import { Component, OnInit } from '@angular/core';
import { Estudiante } from './estudiante';
import { EstudiantesService } from './estudiantes.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import Swal from 'sweetalert2';

// Decorador para definir el componente Estudiantes
@Component({
  selector: 'app-estudiantes',// Selector del componente
  standalone: true,// Indica que es un componente independiente
  imports: [CommonModule, RouterModule],// Modúlos que el componente necesita
  templateUrl: './estudiantes.component.html',// Ruta del archivo de plantilla HTML
  styleUrl: './estudiantes.component.css'// Ruta del archivo de estilo CSS
})
export class EstudiantesComponent implements OnInit {

  // Arreglo para almacenar la lista de estudiantes
  repositorio:Estudiante[];

  // Inyecta el servicio de estudiantes en el constructor
  constructor(private estudiantesService: EstudiantesService) {}

  // Método que se ejecuta al inicializar el componente
  ngOnInit(): void {
    // Llama al servicio para obtener la lista de estudiantes y la asigna a repositorio
    this.estudiantesService.getEstudiantes().subscribe(
      estudiantes => this.repositorio = estudiantes
    )
  }

  // Método para eliminar un estudiante
  delete(estudiante:Estudiante):void{
    // Muestra un cuadro de confirmación con SweetAlert
    Swal.fire({
      title: "Esta segur@?",
      text: `Seguro deseas eliminar la Tarea: ${estudiante.nombre} !`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Eliminar!"
    }).then((result) => {
      // Si el usuario confirma, se procede a eliminar
      if (result.isConfirmed) {
        // Llama al servicio para eliminar el estudiante por su ID
        this.estudiantesService.delete(estudiante.id).subscribe(
          response=>{
            // Actualiza el repositorio eliminando al estudiante de la lista
            this.repositorio = this.repositorio.filter(tar=> tar !== estudiante)
            // Muestra mensaje de éxito con SweetAlert
            Swal.fire({
              title: "Borrada!",
              text: `Tu Tarea ha sido eliminada: ${estudiante.nombre}`,
              icon: "success"
            });
          }
        )
      }
    });
  }
}

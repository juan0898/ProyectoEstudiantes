// Importa las librerías y componentes necesarios para el formulario de estudiantes
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EstudiantesComponent } from './estudiantes.component';
import { Estudiante } from './estudiante';
import { Router, ActivatedRoute } from '@angular/router';
import { EstudiantesService } from './estudiantes.service';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',// Selector del componente
  standalone: true,// Componente independiente
  imports: [FormsModule, EstudiantesComponent, CommonModule],// Módulos necesarios para el componente
  templateUrl: './form.component.html'// Ruta del archivo de plantilla HTML
})
export class FormComponent {
  // Definición de un nuevo objeto estudiante
  public estudiante: Estudiante = new Estudiante()

  // Título del formulario
  titulo:string="Formulario de registro de Estudiantes"

  // Inyección de dependencias del servicio de estudiantes y del router
  constructor(private estudianteService: EstudiantesService, private router : Router,
    private activatedRouted: ActivatedRoute
  ){}

  // Método ngOnInit que se ejecuta cuando el componente se inicializa
  ngOnInit(){
    this.cargarEstudiante()// Carga los datos del estudiante si existe un ID en la URL
  }

  // Método para cargar los datos del estudiante desde la API si el ID está presente en la URL
  cargarEstudiante():void{
    this.activatedRouted.params.subscribe(params => {
      let id = params['id'] // Obtiene el ID del parámetro de la URL
      if(id){
         // Si el ID existe, obtiene los datos del estudiante y los asigna al objeto 'estudiante'
        this.estudianteService.getEstudiante(id).subscribe((estudiante) => this.estudiante = estudiante)
      }
    })
  }

  // Método para actualizar los datos del estudiante
  update():void{
    this.estudianteService.update(this.estudiante).subscribe(estudiante => {
      this.router.navigate(['/estudiantes'])// Navega a la lista de estudiantes
      // Muestra una alerta de éxito con SweetAlert
      Swal.fire('Estudiante Actualizado', `Estudiante: ${estudiante.nombre} Actualizado con éxito!`, 'success')
    })
  }
  // Método para crear un nuevo estudiante
  public create():void{
    //console.log("clicked");
    // Muestra en la consola los datos del estudiante para depuración
    console.log(this.estudiante);
    
    // Llama al servicio para crear el estudiante y navega a la lista de estudiantes
    this.estudianteService.create(this.estudiante).subscribe(estudiante => 
   {this.router.navigate(["/estudiantes"]) // Navega a la lista de estudiantes
    // Muestra una alerta de éxito con SweetAlert
    Swal.fire('Nuevo estudiante', `Estudiante: ${estudiante.nombre} creado con éxito`, 'success')
   }
  );
  }
}

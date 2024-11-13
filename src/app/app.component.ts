import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { ResponsablesComponent } from './responsables/responsables.component';
import { FormComponent } from './estudiantes/form.component';

@Component({
  selector: 'app-root',// Etiqueta para este componente
  standalone: true,// Indica que este es un componente independiente
  imports: [
    RouterOutlet, // Permite la renderización de componentes según la ruta
    HeaderComponent, // Se importa el componente Header
    FooterComponent, // Se importa el componente Footer
    EstudiantesComponent, // Se importa el componente Estudiantes
    ResponsablesComponent, // Se importa el componente Responsables
    FormComponent // Se importa el componente Formulario de estudiantes
  ],
  templateUrl: './app.component.html', // Archivo de la plantilla HTML
  styleUrl: './app.component.css' // Archivo de estilos CSS
})
export class AppComponent {
  title = 'frontend'; // Propiedad que contiene el título de la aplicación
}

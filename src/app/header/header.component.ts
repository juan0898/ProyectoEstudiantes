import { Component } from '@angular/core';// Importa el decorador Component desde Angular
import { RouterModule } from '@angular/router';// Importa RouterModule para usar el enrutamiento en el componente

@Component({
  selector: 'app-header',// Define el selector del componente para usarlo en el HTML como <app-header></app-header>
  standalone: true,// Indica que este componente es autónomo y no necesita estar dentro de un módulo Angular
  imports: [RouterModule],// Importa RouterModule para que el componente pueda usar funcionalidades de enrutamiento
  templateUrl: './header.component.html',// Ruta al archivo de plantilla HTML del componente
  styleUrl: './header.component.css'// Ruta al archivo de estilos CSS del componente
})
export class HeaderComponent {
// Propiedad 'titulo' que se utilizará en la plantilla para mostrar el título
titulo = 'Proyecto Estudiantes'
}

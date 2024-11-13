// Importa el decorador Component desde Angular
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',// Define el selector que se usará para este componente en el HTML
  standalone: true,// Define que el componente es autónomo y no necesita ser parte de un módulo
  imports: [],// Si el componente tiene dependencias de otros módulos, se agregarían aquí (vacío en este caso)
  templateUrl: './footer.component.html',// Ruta al archivo de plantilla HTML del componente
  styleUrl: './footer.component.css'// Ruta al archivo de estilos CSS del componente
})
export class FooterComponent {
// Definición de los datos que se van a mostrar en el pie de página
autor:any= {nombres1:'Juan Diego Mora Alvarado', nombres2:'Luis Ignacio Bonilla'}
programa:any= {info:'Programación III, Cuurso II.'}
}

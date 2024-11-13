import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ResponsablesComponent } from './responsables/responsables.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { FormComponent } from './estudiantes/form.component';

// Definición de las rutas de la aplicación
export const routes: Routes = [
    // Ruta principal ('') que redirige automáticamente a '/estudiantes' (ruta por defecto)
    {path:'', redirectTo:'/estudiantes', pathMatch:'full'},
    // Ruta para el listado de estudiantes
    {path:'estudiantes', component:EstudiantesComponent},
    // Ruta para el componente del encabezado
    {path:'header', component:HeaderComponent},
    // Ruta para el componente del pie de página
    {path:'footer', component:FooterComponent},
    // Ruta para la sección de responsables
    {path:'responsables', component:ResponsablesComponent},
    // Ruta para el formulario de creación de un estudiante
    {path:'estudiantes/form', component:FormComponent},
    // Ruta para editar un estudiante, que recibe un parámetro de ID en la URL
    {path:'estudiantes/form/:id', component:FormComponent},
];

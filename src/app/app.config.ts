import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

// Importación de las rutas definidas para el enrutamiento de la aplicación
import { routes } from './app.routes';

// Configuración global de la aplicación Angular
export const appConfig: ApplicationConfig = {
  // Proveedores para la detección de cambios y el enrutamiento
  providers: [
    // Configura la detección de cambios con coalescencia de eventos
    // Esto optimiza la actualización de la vista al agrupar eventos asíncronos (como clics o respuestas HTTP) en una sola detección de cambios
    provideZoneChangeDetection({ eventCoalescing: true }), 
    
    // Proporciona el enrutador con las rutas definidas
    // Este configurará el enrutamiento de la aplicación, asignando componentes a cada ruta en `routes`
    provideRouter(routes)]
};

// Importa la clase Estudiante desde el archivo 'estudiante'
import { Estudiante} from "./estudiante";

// Define un arreglo constante de objetos Estudiante con datos ficticios
export const ESTUDIANTES: Estudiante[]=[
    {id:1, nombre:'Juan P\u00e9rez',edad:20,carrera:'Ingenier\u00eda de Software', 
        universidad:'CORHUILA', promedio:4.3},
        {id:2, nombre:'Laura G\u00f3mez',edad:22,carrera:'Ingenier\u00eda Industrial', 
          universidad:'CORHUILA', promedio:4.1},
          {id:3, nombre:'Carlos D\u00edaz',edad:21,carrera:'Econom\u00eda', 
            universidad:'CORHUILA', promedio:4.5}]

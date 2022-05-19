/*  USO DEL DO-WHILE
    ================
    Algoritmo para cargar las notas de alumnos de un curso.
    - Si el nombre ingresado es igual a "ESC", se finaliza la carga.
    - Por cada ingreso se muestra en consola el nombre del alumno y la nota.
    - Se lleva la cuenta de alumnos ingresados.
    - A partir de ellos obtiene el promedio, nota máxima y mínima del curso.
*/

const NOTA_MAXIMA_POSIBLE = 10.0;

let nombreAlumno;
let nota;

let notaPromedio = 0.0;
let notaMaxima = 0.0; 
let notaMinima = NOTA_MAXIMA_POSIBLE;

let contAlumnos = 0;
let condContinuar = true;


do {
    // Ingreso nombre del alumno.
    nombreAlumno = prompt("Ingrese nombre alumno (ESC para salir):");

    if ((nombreAlumno == "ESC") || (nombreAlumno == "Esc") || (nombreAlumno == "esc")) {
        condContinuar = false;
        console.log("Se finalizó la carga de notas");

    } else {

        // Ingreso la nota del alumno.
        notaAlumno = parseFloat(prompt("Ingrese la nota obtenida por el alumno"));

        contAlumnos++; // incremento cuenta de alumnos.

        // Muestro por consola un resúmen de los datos obtenidos.
        console.log("Alumno: "+ nombreAlumno + ", obtuvo un " + notaAlumno + " en su exámen.");

        // Determino si la nota minima.
        if (notaAlumno < notaMinima) { notaMinima = notaAlumno; }

        // Determino si la nota es máxima.
        if (notaAlumno > notaMaxima) { notaMaxima = notaAlumno; }

        // Sumo la nota al promedio promedio.
        notaPromedio = notaPromedio + notaAlumno;
    }

} while(condContinuar);


// Calculo el promedio final.
notaPromedio = notaPromedio / contAlumnos;

// Muestro los resultados obtenidos.
console.log("La nota promedio es: " + notaPromedio);
console.log("La nota máxima es: "+ notaMaxima);
console.log("La nota minima es: " + notaMinima);


/* USO DEL FOR
   ===========
   - A partir de la cantidad de alumnos cargados, se obtiene la secuencia de Fibonacci.
*/

let fn2 = 0;
let fn1 = 1;
let fn;

console.log ("La secuencia de fibonacci para " + contAlumnos + " valores es: ")

for (let i = 0;i<contAlumnos;i++) {

    fn = fn1 + fn2;

    // Muestro por consola el valor calculado.
    console.log(fn);

    // Guardo los valores anteriores para continuar con la secuencia.
    fn2 = fn1;
    fn1 = fn;
}

 








  


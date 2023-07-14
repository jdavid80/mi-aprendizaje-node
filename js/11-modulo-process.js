/* console.log(process); */

/* console.log(process.env); */

/* console.log(process.argv); */

/* function obtenerNombre(nombre) {
    let indexNombre = process.argv.indexOf(nombre);
    return process.argv[indexNombre + 1];
} */

/* console.log(obtenerNombre('--nombre')); */

/* let nombre = obtenerNombre('--nombre');
let actividad = obtenerNombre('--Act.');
console.log(`Nombre: ${nombre}. Tipo de Actividad: ${actividad}`); */

console.log("==Obteniendo la ruta de node y del ejercicio: ==");
console.log(process.argv);
console.log("==Obteniendo solamente la ruta del ejercicio: ==");
console.log(process.argv[1]);
console.log("==Obteniendo el cuarto parámetro ingresado: ==");
console.log(process.argv[3]);

console.log(process.memoryUsage());
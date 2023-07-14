let path = require('path');
let util = require('util');

/* Traer el nombre del archivo */
console.log(path.basename(__filename));

/* Manipular una ruta */
console.log(path.join(__dirname, 'www', 'img', 'home', 'uploads'));

let nombre = "David";
let calificacion = 5.1;
/* Convertir decimal a entero con el módulo util */
let nombreFormat = util.format("Nombre: %s. Calificación: %i", nombre, calificacion);
console.log(nombreFormat);
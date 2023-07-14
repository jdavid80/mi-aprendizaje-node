const fs = require('fs');

console.log("Antes de leer el archivo");
// Leer archivo
const archivo = fs.readFileSync('../index.html', 'utf-8');

console.log(archivo);

console.log("Despues de leer el archivo");

// Cambiar el nombre del archivo
fs.renameSync('../prueba-rename.html', '../nombre-cambiado.html');

console.log("Después de cambiar el nombre del archivo");

// Agregar contenido al archivo
fs.writeFileSync('../prueba-writeFile.html', '<p>Línea agregada</p>');

console.log("Despues de modificar el archivo");

// Eliminar Archivos
fs.unlinkSync('../prueba-unlink.html');

console.log("Despues de eliminar el archivo");


const fs = require('fs');

console.log("Antes de leer el archivo");
fs.readFile('../index.html', 'utf-8', (err, contenido) => {
    if (err) {
        throw err;
    }
    console.log("1. Archivo leido con éxito");
});

console.log("Despues de leer el archivo");

// Cambiar el nombre del archivo
fs.rename('../prueba-rename.html', '../nombre-cambiado.html', (err) => {
    if (err) {
        throw err;
    }
    console.log("2. Nombre de archivo cambiado con éxito.");
});

console.log("Después de cambiar el nombre del archivo");

// Agregar contenido al archivo
fs.writeFile('../prueba-writeFile.html', '<p>Línea agregada</p>', 
            (err) => {
    if (err) {
        throw err
    }
    console.log("3. Archivo modificado con éxito");    
});

console.log("Despues de modificar el archivo");

// Eliminar Archivos
fs.unlink('../prueba-unlink.html',  (err) => {
    if (err) {
        throw err;
    }
    console.log("4. Archivo eliminado con éxito");
});

console.log("Despues de eliminar el archivo");


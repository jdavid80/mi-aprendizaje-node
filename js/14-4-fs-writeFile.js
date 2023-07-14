const fs = require('fs');

fs.writeFile('../prueba-writeFile.html', 'Contenido Nuevo', 
            (err) => {
    if (err) {
        throw err
    }
    console.log("Contenido reemplazado exitosamente");
});


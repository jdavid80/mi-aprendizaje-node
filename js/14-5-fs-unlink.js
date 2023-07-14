const fs = require('fs');

fs.unlink('../prueba-unlink.html', (err) => {
    if (err) {
        throw err;
    }
    console.log("Archivo eliminado con éxito");
});
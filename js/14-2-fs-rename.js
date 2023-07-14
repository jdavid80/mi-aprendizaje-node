const fs = require('fs');

fs.rename('../prueba-rename.html', '../nombre-cambiado.html', (err) => {
    if (err) {
        throw err;
    }
    else {
        console.log("El nombre del archivo fue modificado");
    }
});


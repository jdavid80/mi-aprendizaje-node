/* ======= */
/* 1er. Ejemplo: Leyendo un archivo*/
/* ======== */
/* const fs = require('fs');

fs.readFile('../index.html', 'utf-8', (err, contenido) => {
    if(err) {
        console.log(err);
    }
    else {
        console.log(contenido);
    }
}); */



/* ======== */
/* 2do. Ejemplo generando un error */
/* ======== */
/* const fs = require('fs');

fs.readFile('inde.html', 'utf-8', (err, contenido) => {
    if(err) {
        console.log(err);
    }
    else {
        console.log(contenido);
    }
    console.log("Si utilizaramos throw, este mensaje " + 
                 "NO se visualizaría");
}); */

/* ======== */
/* 3er. Ejemplo mostrando el error con throw */
/* ======== */
const fs = require('fs');

fs.readFile('index.html', 'utf-8', (err, contenido) => {
    if(err) {
        throw err;
    }
    else {
        console.log(contenido);
    }
    console.log("Al utlizar throw, este mensaje queda como " + 
    "inaccesible si se presenta un error ya que throw genera " + 
    "que se salga de la función");
}); 
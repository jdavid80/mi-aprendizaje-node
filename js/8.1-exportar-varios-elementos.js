function saludar(nombre) {
    return `Hola ${nombre}`;
}

function saludarHolaMundo() {
    return 'Hola Mundo!';
}

/* Forma 1 de exportar elementos */
 /* module.exports.saludar = saludar;
 module.exports.saludarHolaMundo = saludarHolaMundo; */

 /* Forma 2 de exportar elementos(Mas concisa) */
 module.exports = {
    saludar: saludar,
    saludarHolaMundo: saludarHolaMundo
 };


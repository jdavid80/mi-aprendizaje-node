function mostrarTema(tema) {
    console.log(`Este ejercicio pertenece a ${tema}`);
}

console.log('Antes de setInmediate()');

setImmediate(mostrarTema, 'Ciencias Naturales');

console.log('Despues de setImmediate()');


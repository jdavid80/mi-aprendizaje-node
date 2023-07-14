function mostrarTematica(retraso) {
    console.log(`Este es un ejemplo de un retraso de ${retraso}`);
}

/* SetTimeout con mas de 3 paramétros*/
function mensajeFinalEvaluacion(nombre, materia) {
    console.log(`Sr(a) ${nombre}, el examen de ${materia} ha terminado`);
}

/* Llamando la función sin un timer */
console.log('==Mostrar Mensaje sin retraso==');
mostrarTematica('0 Segundos');

/* Llamando la función con un retraso de 5 segundos */
console.log('==Mostrar Mensajes con retraso de 3 segundos y 5 segundos==');
setTimeout(mostrarTematica, 5000, '5 segundos');

/* Llamando la función con varios parámetros */
setTimeout(mensajeFinalEvaluacion, 3000, 'David', 'Matemáticas');
// Ejercicio N. 1
/* let nombre = "";
process.stdout.write("Por favor, ingrese su nombre: ");

process.stdin.on('data', function(data) {
    nombre = data.toString().trim();
    process.stdout.write(`Bienvenido(a), ${nombre}!`);
    process.exit;
}); */
// Ejercicio N. 2
let preguntas = ['Nombre Completo: ' ,
                 'N. de Identificación: ',
                 'Teléfono: '];

let respuestas = [];

function pregunta(i) {
    process.stdout.write(preguntas[i])
}
process.stdin.on('data', function(data) {
    // A medida que van llegando las respuestas,
    // estas se van agregando.
    respuestas.push(data.toString().trim());

    // Verificamos si todavia quedan elementos
    // en el arreglo de preguntas
    if (respuestas.length < preguntas.length) {
        pregunta(respuestas.length);
    }
    else {
        console.log("==Información Almacenada==");
        for(i = 0; i < respuestas.length; i++) {
            console.log(respuestas[i]);
        }
        process.exit();
    }
});

/* Llama la función para que inicien las preguntas */
pregunta(0);



// Ejercicio 1
/*const readline = require("readline");

let rl = readline.createInterface(process.stdin, process.stdout);

 rl.question('Cuál es tu nombre: ', (respuesta) => {
    console.log(`Hola, ${respuesta}!`);
    process.exit();
}); */

// Ejercicio 2
 const readline = require("readline");

let rl = readline.createInterface(process.stdin, process.stdout);

let persona = {
    nombre: '', 
    comentarios: [] 
}

rl.question('Cuál es tu nombre: ', (respuesta) => {
    persona.nombre = respuesta;

    rl.setPrompt('Dejanos un comentario: ');
    rl.prompt();
    
});

rl.on('line', (input) => {
    if (input.trim() === 'salir') {
        process.exit();
    }
    persona.comentarios.push(input.trim());

    rl.setPrompt('Dejanos un comentario: ');
    rl.prompt();
})

let instructor = {
    "nombre-instructor": "Jesús David",
    "apellidos-instructor": "Calderón",
    "titulado-lider": 2669959,
    "titulados-formacion": [
        2669959,
        2556456,
        2644592
    ],
    "sede": "Yamboró" 
}
// Convirtiendo inicialmente a json
let instructorJSON = JSON.stringify(instructor);
console.log(instructorJSON);

// Convirtiendo la cadena de texto(json) a Javascript
let instructorOjbeto = JSON.parse(instructorJSON);
console.log(instructorOjbeto);


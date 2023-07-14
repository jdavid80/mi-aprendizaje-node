function saludar(nombre) {
    return `Hola ${nombre}`
};

/* En este caso saludarProp es una propiedad 
y saludar es la función que estamos exportando.
Generalmente el nombre de la propiedad
lo dejamos con el mismo nombre de la definición 
de la función pero son elementos independientes.*/
module.exports.saludarProp = saludar;
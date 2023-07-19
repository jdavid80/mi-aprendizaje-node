/* Creamos una constante que contiene
un arreglo para la 2da. forma de exportar */
const Math = {}

function add(num1, num2) {
    return num1 + num2;
}

function substract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0) {
        console.log("No se puede dividir por 0");
    }
    else {
        return num1 / num2;
    }
}

/* 1er. Forma de exportar */
// exports.add = add;
// exports.substract = substract;
// exports.multiply = multiply;
// exports.divide = divide;

/* 2da. Forma de exportar */
Math.add = add;
Math.substract = substract;
Math.multiply = multiply;
Math.divide = divide;

module.exports = Math;



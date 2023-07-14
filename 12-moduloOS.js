const os = require('os');

console.log(`Versión del Sistema Operativo: ${os.version()}`);
console.log(`Arquitectura: ${os.platform()} ${os.arch()}`);
console.log(`Memoria Libre: ${os.freemem()}`);

/* Con este módulo podria conocer el directorio
principal del Sistema Operativo: */
console.log(os.homedir());

/* Identificar la cantidad  de segundos que 
se lleva ejecutando el S.O. en la pc*/
console.log(os.uptime());

/* Obteniendo información acerca
del usuario de la pc */
console.log(os.userInfo());
const { saludar, saludarHolaMundo } = require('./9.2-exportar-modulo');

/* Si llamamos el módulo completo, debemos incluirlo al llamar el método.
Se ha comentado el código ya que la siguiente línea genera error */
/* console.log(saludo.saludarHolaMundo()); */

/* Si desestructuramos, no es necesario llamar el módulo, se llama 
directamente a la propiedad que está asociada a la función */
console.log(saludarHolaMundo());
console.log(saludar("David"));
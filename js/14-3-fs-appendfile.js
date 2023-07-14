const fs = require('fs');

fs.appendFile('../prueba-appendFile.html', 
            '<p>Texto agregado con node' + 
            '(Ver ejercicio Appendfile)</p>', (err) => {
                if (err) {
                    throw err
                }
                console.log("Archivo actualizado!");
            });

            
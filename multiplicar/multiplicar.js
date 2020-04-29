const fs = require('fs'); //siempre debe estar en donde esta fs.writeFile
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('=========================='.green);
    console.log(`tabla de ${ base }`.red);
    console.log('=========================='.green);

    for (let i = 1; i <= limite; i++) {

        console.log(`${ base } * ${ i } = ${ base * i}`);
    }

}




let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor agregado ${ base }No es un número`);
            return; //se soloca return porque reject ejecuta la finción se dispara y sigue coriendo el código  y con return se para de una      
        }

        //Cuerpo de la promesa

        let data = '';

        for (let i = 1; i <= limite; i++) {

            data += `${ base } * ${ i } = ${ base * i}\n`; //\n es para alto de lineas
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {

            if (err)
                reject(err)
            else
                resolve(`tabla-${ base }-al-${limite}.txt`);


        });

    });

}

module.exports = {
    crearArchivo,
    listarTabla
}
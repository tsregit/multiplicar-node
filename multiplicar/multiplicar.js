let fs = require('fs');
const colors = require('colors');

let listaTabla = (base, limite) => {
    console.log('=============='.green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    };
    console.log('=============='.green);
};

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) return reject(`El valor introducido ${base} no es un numero`);
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        };

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, err => {
            if (err) reject(err);
            resolve(`tabla-${base}.txt`);
        })
    });
}

module.exports = {
    crearArchivo,
    listaTabla
}
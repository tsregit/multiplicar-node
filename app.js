//
const { argv } = require('./config/yargs');
const colors = require('colors');
const { crearArchivo, listaTabla } = require('./multiplicar/multiplicar')

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listaTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then(archivo => console.log(`Archivo creado ${archivo}`)).catch(err => {
            console.log(err);
        });
        break;
    default:
        console.log('COMANDO NO RECONOCIDO');
        break;
}
// console.log(process); variable de entorno
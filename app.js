
const argv = require('./config/yargs');
const { crearArchivo } = require('./multiplicar');
const colors = require('colors');

//argv

//const [, , arg3 = 'base=8', arg4 = 'listar=false'] = process.argv
//const [, base = 1] = arg3.split('=')
//const [, listar = "false"] = arg4.split('=')

//console.log((base));
//console.log((listar));

//const base= 1;
//let i = 0;



console.log(argv);

//console.log('base: yargs', argv.base);

//console.log('listar: yargs', argv.listar);


//console.log(process.argv);

    crearArchivo(argv.b, argv.l, argv.h)
        .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
        .catch(err => console.log(err));
    


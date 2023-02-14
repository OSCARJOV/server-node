const { describe, number } = require('yargs');


const argv = require('yargs')
.option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: "Muestra la base "
})

.option('l', {
    alias: 'listar',
    type: 'boolean',
    default: false,
    describe: "Lista la tabla"

})

.option('h', {
    alias: 'hasta',
    type: number,
    default: 10,
    describe: "Hasta el numero"

})


.check((argv, options) => {
    if (isNaN(argv.b)) {
        throw 'La base tiene que ser un numero'
    }
    return true;
})
.argv;

module.exports = argv;
const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Genera un archivo con la tabla de multiplicar', opts)
    .help()
    .argv;


module.exports = {
    argv
}


/*de app.js se redujo el objeto de listar y crear a opts. Para utilizar el comando u objeto argv fuera de 
    del arcivo se debe exportar */
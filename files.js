const opciones = {
    calculo: {
        default: 0,
        alias: 'c'
    },
    ingles: {
        default: 0,
        alias: 'i'
    },
    estadistica: {
        demand: true,
        alias: 'e'
    }
}

const argv = require('yargs').command('promedio', 'Calcular el promedio', opciones).argv;

console.log(argv.calculo);
console.log('El nombre del estudiante es ' + argv.nombre);
console.log(argv);
console.log('El promedio es ' + (argv.c + argv.i + argv.e) / 3);
//destructuracion
const { estudiante, obtener_promedio } = require('./calculos');
const fs = require('fs');

console.log('El nombre del estudiante es: ' + estudiante.nombre);
console.log('El promedio del estudiante es: ' +
    obtener_promedio(
        estudiante.notas.calculo,
        estudiante.notas.ingles,
        estudiante.notas.estadistica));


let { nombre, edad, notas: { calculo, ingles, estadistica } } = estudiante;
console.log('El nombre del estudiante es: ' + nombre);

let crearArchivo = (estudiante) => {
    texto = 'El nombre del estudiante es ' + nombre + ' y ha obtenido un promedio de ' +
        obtener_promedio(calculo, ingles, estadistica);
    fs.writeFile('./file/promedio.txt', texto, (err) => {
        if (err) throw (err);
        console.log('El archivo ha sido creado satisfactoriamente.');
    })
}

crearArchivo(estudiante);
const estudiante1 = require('./calculos');

console.log(estudiante1.estudiante);
console.log('El promedio del estudiante es ' + estudiante1.obtener_promedio(estudiante1.estudiante.notas.calculo,
    estudiante1.estudiante.notas.ingles, estudiante1.estudiante.notas.estadistica));
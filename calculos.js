let estudiante = {
    nombre: 'Lizet',
    edad: 25,
    notas: {
        calculo: 5,
        ingles: 5,
        estadistica: 5
    }
};

let obtener_promedio = (n, m, p) => (n + m + p) / 3;
let nota1 = estudiante.notas.calculo;
let nota2 = estudiante.notas.ingles;
let nota3 = estudiante.notas.estadistica;

console.log(obtener_promedio(3, 4, 5));
console.log(obtener_promedio(nota1, nota2, nota3));

module.exports = {
    estudiante,
    obtener_promedio
};
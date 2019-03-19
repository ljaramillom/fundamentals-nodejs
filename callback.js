//callback
let promedio = (i, j, k, callback) => {
    setTimeout(() => {

        let resultado = (i + j + k) / 3;
        callback(resultado);
    }, 2000);
}
promedio(3, 4, 5, function(resultado) {
    console.log('El promedio obtenido es de ' + resultado);
});
const express = require('express')
const app = express()

//callback
let promedio = (i, j, k, callback) => {
    setTimeout(() => {

        let resultado = (i + j + k) / 3;
        callback(resultado);
    }, 2000);
}
promedio(3, 4, 5, function(resultado) {
    texto = `El promedio obtenido es de ${resultado}`;
});


app.get('/', function(req, res) {
    res.send(texto)
})

app.listen(3000)
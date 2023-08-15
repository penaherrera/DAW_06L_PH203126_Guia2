document.addEventListener("DOMContentLoaded", function () {
    var calcularButton = document.getElementById("btncalcular");
    var resultadosDiv = document.getElementById("results");

    calcularButton.addEventListener("click", function () {
        var numeroInput = document.getElementById("numeroInt");
        var numero = parseInt(numeroInput.value);

        var resultHtml = calcularInfoNumeros(numero);
        resultadosDiv.innerHTML = resultHtml;
    });
});

function calcularInfoNumeros(numero) {
    var numStr = numero.toString();
    var cantidadCifras = numStr.length;
    var cantidadCifrasImpares = 0;
    var cantidadCifrasPares = 0;
    var sumaCifrasImpares = 0;
    var sumaCifrasPares = 0;
    var sumaTodasCifras = 0;
    var cifraMayor = -Infinity;
    var cifraMenor = Infinity;

    for (var i = 0; i < numStr.length; i++) {
        var cifra = parseInt(numStr[i]);

        sumaTodasCifras += cifra;

        if (cifra % 2 === 0) {
            cantidadCifrasPares++;
            sumaCifrasPares += cifra;
        } else {
            cantidadCifrasImpares++;
            sumaCifrasImpares += cifra;
        }

        if (cifra > cifraMayor) {
            cifraMayor = cifra;
        }

        if (cifra < cifraMenor) {
            cifraMenor = cifra;
        }
    }

    var resultHtml = `
        <p>Cantidad de cifras: ${cantidadCifras}</p>
        <p>Cantidad de cifras impares: ${cantidadCifrasImpares}</p>
        <p>Cantidad de cifras pares: ${cantidadCifrasPares}</p>
        <p>Suma de cifras impares: ${sumaCifrasImpares}</p>
        <p>Suma de cifras pares: ${sumaCifrasPares}</p>
        <p>Suma de todas las cifras: ${sumaTodasCifras}</p>
        <p>Cifra mayor: ${cifraMayor}</p>
        <p>Cifra menor: ${cifraMenor}</p>
    `;

    return resultHtml;
}
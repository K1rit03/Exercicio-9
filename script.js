document.getElementById("converter").addEventListener("click", function() {
    let numeroString = document.getElementById("numeroString").value;

    // Conversão para float
    let numeroFloat = parseFloat(numeroString);

    // Apresentação do tipo da variável
    let tipoVariavel = typeof numeroFloat;

    // Exibir resultados na página HTML
    let resultadoHTML = "Tipo da variável após a conversão: " + tipoVariavel;
    document.getElementById("resultado").innerHTML = resultadoHTML;
});

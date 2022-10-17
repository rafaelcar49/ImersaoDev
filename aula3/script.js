var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
    var elementoResultado = document.getElementById("resultado");
    var chute = parseInt(document.getElementById("valor").value);

    for (var i = 0; i < 3; i++) {
        if (chute > 10 || chute < 0) {
            elementoResultado.innerHTML = "Seu número não pode ser maior que 10 e nem menor 0."
        } else if (chute > numeroSecreto) {
            elementoResultado.innerHTML = "Seu numero é maior que o sorteado."
        } else if (chute < numeroSecreto) {
            elementoResultado.innerHTML = "Seu numero é menor que o sorteado."
        } else {
            elementoResultado.innerHTML = "Parabéns! Acertou, a resposta era " + numeroSecreto;
        }
    }














    // if (chute == numeroSecreto) {
    //     elementoResultado.innerHTML = "Você acertou"
    // } else if (chute > 10 || chute < 0) {
    //     elementoResultado.innerHTML = "O valor não deve ser maior que 10 nem menor que 0!"
    // } else {
    //     for (var i = 0; i < 2; i++) {
    //         if (chute > numeroSecreto) {
    //             elementoResultado.innerHTML = "O número " + chute + " é maior do que o número sorteado"
    //         } else {
    //             elementoResultado.innerHTML = "O número " + chute + " é menor do que o número sorteado"
    //         }
    //     }
    // }
}

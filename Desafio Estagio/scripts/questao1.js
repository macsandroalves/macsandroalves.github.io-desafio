function calcularSoma() {
    let INDICE = 13;
    let SOMA = 0;
    let K = 0;

    while (K < INDICE) {
        K = K + 1;
        SOMA = SOMA + K;
    }

    document.getElementById('resultado1').textContent = SOMA;
}

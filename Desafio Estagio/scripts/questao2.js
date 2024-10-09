function isFibonacci(num) {
    let a = 0;
    let b = 1;
    while (b < num) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    return b === num || num === 0;
}

function verificarFibonacci() {
    const numero = parseInt(document.getElementById('numero2').value);
    const resultado = isFibonacci(numero) 
        ? `${numero} pertence à sequência de Fibonacci.` 
        : `${numero} não pertence à sequência de Fibonacci.`;
    document.getElementById('resultado2').textContent = resultado;
}

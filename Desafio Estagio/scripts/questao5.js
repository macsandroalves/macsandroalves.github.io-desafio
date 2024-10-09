function inverterTexto() {
    const texto = document.getElementById('texto5').value;
    let stringInvertida = '';
    for (let i = texto.length - 1; i >= 0; i--) {
        stringInvertida += texto[i];
    }
    document.getElementById('resultado5').textContent = stringInvertida;
}

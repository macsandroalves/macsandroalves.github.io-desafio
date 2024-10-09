function calcularPercentual() {
    const faturamentoPorEstado = {
        "SP": 67836.43,
        "RJ": 36678.66,
        "MG": 29229.88,
        "ES": 27165.48,
        "Outros": 19849.53
    };

    const totalFaturamento = Object.values(faturamentoPorEstado).reduce((acc, curr) => acc + curr, 0);
    const lista = document.getElementById('percentuais');
    lista.innerHTML = '';

    for (let estado in faturamentoPorEstado) {
        const percentual = (faturamentoPorEstado[estado] / totalFaturamento) * 100;
        const li = document.createElement('li');
        li.textContent = `${estado}: ${percentual.toFixed(2)}%`;
        lista.appendChild(li);
    }
}

function calcularFaturamento() {
    const faturamentoDiario = [
        { "dia": 1, "valor": 22174.1664 },
        { "dia": 2, "valor": 24537.6698 },
        { "dia": 3, "valor": 0.0 },
        { "dia": 4, "valor": 26139.6134 },
        { "dia": 5, "valor": 0.0 },
        { "dia": 6, "valor": 26742.6612 },
        { "dia": 7, "valor": 0.0 }
        // Adicione outros dias do mês conforme necessário...
    ];

    const diasComFaturamento = faturamentoDiario.filter(d => d.valor > 0);
    const totalFaturamento = diasComFaturamento.reduce((acc, curr) => acc + curr.valor, 0);
    const mediaMensal = totalFaturamento / diasComFaturamento.length;
    const menorValor = Math.min(...diasComFaturamento.map(d => d.valor));
    const maiorValor = Math.max(...diasComFaturamento.map(d => d.valor));
    const diasAcimaMedia = diasComFaturamento.filter(d => d.valor > mediaMensal).length;

    document.getElementById('menor').textContent = menorValor.toFixed(2);
    document.getElementById('maior').textContent = maiorValor.toFixed(2);
    document.getElementById('dias-acima').textContent = diasAcimaMedia;
}

Este repositório soluciona questões proposta durante seleção o estágio na Target Sistemas de Construção. A linguagem escolhida foi JavaScript.

Você pode acessar os resultados AQUI ou conferir abaixo as explicações detalhadas de cada solução.
Desafio 1 - Soma dos Números de 1 a 13
Enunciado:

Considere o seguinte trecho de código:

javascript

int INDICE = 13, SOMA = 0, K = 0;

while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
}

console.log(SOMA);

Qual será o valor final da variável SOMA após a execução desse código?
Solução:

O valor da soma será 91.
Desafio 2 - Verificação de Sequência de Fibonacci
Enunciado:

A sequência de Fibonacci é composta pelos números que seguem a regra de que cada número é a soma dos dois anteriores, começando com 0 e 1 (por exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...).

Implemente um programa que permita ao usuário digitar um número e verifique se ele pertence à sequência de Fibonacci.

Importante:

    O número pode ser informado por qualquer método de entrada;
    Não utilize funções prontas da linguagem.

Solução:

O programa retorna uma mensagem informando se o número informado faz parte da sequência de Fibonacci.
Desafio 3 - Análise de Faturamento Diário
Enunciado:

Dado um vetor que contém os valores de faturamento diário de uma empresa, escreva um programa que calcule:

    O menor valor de faturamento em um dia do mês;
    O maior valor de faturamento em um dia do mês;
    O número de dias no mês em que o faturamento foi superior à média mensal.

Importante:

    Use um arquivo JSON ou XML com os dados de faturamento;
    Dias sem faturamento (finais de semana, feriados) devem ser desconsiderados no cálculo da média.

Solução:

O programa calcula e exibe o menor e maior valor de faturamento, além dos dias em que o faturamento foi superior à média.
Desafio 4 - Percentual de Faturamento por Estado
Enunciado:

Dado o faturamento mensal detalhado por estado, conforme abaixo:

    SP – R$ 67.836,43
    RJ – R$ 36.678,66
    MG – R$ 29.229,88
    ES – R$ 27.165,48
    Outros – R$ 19.849,53

Implemente um programa que calcule o percentual de representação de cada estado no valor total do faturamento.
Solução:

O programa retorna o percentual de contribuição de cada estado para o total.
Desafio 5 - Inversão de String
Enunciado:

Escreva um programa que inverta os caracteres de uma string fornecida pelo usuário.

Importante:

    A string pode ser fornecida por qualquer método de entrada;
    Não utilize funções prontas da linguagem para inverter strings.

Solução:

O programa exibe a string invertida.

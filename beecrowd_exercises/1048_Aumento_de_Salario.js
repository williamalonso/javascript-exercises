/*
  A empresa ABC resolveu conceder um aumento de salários a seus funcionários de acordo com a tabela abaixo:

  Salário |	Percentual de Reajuste
  0 - 400.00 |	15%
  400.01 - 800.00 |	12%
  800.01 - 1200.00 |	10%
  1200.01 - 2000.00 |	7%
  Acima de 2000.00 | 4%

  Leia o salário do funcionário e calcule e mostre o novo salário, bem como o valor de reajuste ganho e o índice reajustado, em percentual.

  Entrada
  A entrada contém apenas um valor de ponto flutuante, com duas casas decimais.

  Saída
  Imprima 3 linhas na saída: o novo salário, o valor ganho de reajuste (ambos devem ser apresentados com 2 casas decimais) e o percentual de reajuste ganho, conforme exemplo abaixo.

  Exemplo de Entrada | Exemplo de saída
  400.00 |  Novo salario: 460.00
            Reajuste ganho: 60.00
            Em percentual: 15 %

  800.01 |  Novo salario: 880.01
            Reajuste ganho: 80.00
            Em percentual: 10 %

  2000.00 |  Novo salario: 2140.00
            Reajuste ganho: 140.00
            Em percentual: 7 %


*/

const fs = require('fs');
const local = false; // Mude para 'true' se estiver testando localmente

const input = local
  ? fs.readFileSync('input.txt', 'utf8')
  : fs.readFileSync('/dev/stdin', 'utf8');

var salario = parseFloat(input); // serve para pegar o primeiro valor do array

if ( salario >= 0 && salario <= 400.00 ) {
  var novo_salario = salario + (salario * 0.15);
  var reajuste_ganho = novo_salario - salario;
  console.log(`Novo salario: ${novo_salario.toFixed(2)}`);
  console.log(`Reajuste ganho: ${reajuste_ganho.toFixed(2)}`);
  console.log(`Em percentual: 15 %`);
} else if ( salario >= 400.01 && salario <= 800.00 ) {
  var novo_salario = salario + (salario * 0.12);
  var reajuste_ganho = novo_salario - salario;
  console.log(`Novo salario: ${novo_salario.toFixed(2)}`);
  console.log(`Reajuste ganho: ${reajuste_ganho.toFixed(2)}`);
  console.log(`Em percentual: 12 %`);
} else if ( salario >= 800.01 && salario <=1200.00 ) {
  var novo_salario = salario + (salario * 0.10);
  var reajuste_ganho = novo_salario - salario;
  console.log(`Novo salario: ${novo_salario.toFixed(2)}`);
  console.log(`Reajuste ganho: ${reajuste_ganho.toFixed(2)}`);
  console.log(`Em percentual: 10 %`);
} else if ( salario >= 1200.01 && salario <= 2000.00 ) {
  var novo_salario = salario + (salario * 0.07);
  var reajuste_ganho = novo_salario - salario;
  console.log(`Novo salario: ${novo_salario.toFixed(2)}`);
  console.log(`Reajuste ganho: ${reajuste_ganho.toFixed(2)}`);
  console.log(`Em percentual: 7 %`);
} else if ( salario > 2000.00 ) {
  var novo_salario = salario + (salario * 0.04);
  var reajuste_ganho = novo_salario - salario;
  console.log(`Novo salario: ${novo_salario.toFixed(2)}`);
  console.log(`Reajuste ganho: ${reajuste_ganho.toFixed(2)}`);
  console.log(`Em percentual: 4 %`);
}
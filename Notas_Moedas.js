/*
  Leia um valor de ponto flutuante com duas casas decimais. Este valor representa um valor monetário. A seguir, calcule o menor número de notas e moedas possíveis no qual o valor pode ser decomposto. As notas consideradas são de 100, 50, 20, 10, 5, 2. As moedas possíveis são de 1, 0.50, 0.25, 0.10, 0.05 e 0.01. A seguir mostre a relação de notas necessárias.

  Entrada
  O arquivo de entrada contém um valor de ponto flutuante N (0 ≤ N ≤ 1000000.00).

  Saída
  Imprima a quantidade mínima de notas e moedas necessárias para trocar o valor inicial, conforme exemplo fornecido.

  Obs: Utilize ponto (.) para separar a parte decimal.
*/
/*
    Método split(): divide uma string em um array de substrings
    
    const str = 'The quick brown fox jumps over the lazy dog.';
    const words = str.split(' ');
    console.log(words);

    Será exibido: Array ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog."]
*/

/*
    Método shift(): remove o primeiro elemento de um array e printa esse elemento

    const array1 = [1,2,3];
    const firstElement = array1.shift();
    console.log(firstElement);

    Será exibido: 1

*/

  var input = require('fs').readFileSync('/dev/stdin', 'utf8');
  var lines = input.split('\n');

  var valor_entrada = parseFloat(lines.shift());
  valor_entrada *= 100;

  var notas_100 = Math.floor(valor_entrada / 10000);
  var novo_valor = (10000 * notas_100);
  var notas_50 = Math.floor( ( valor_entrada - novo_valor ) / 5000);
  novo_valor += (5000 * notas_50);
  var notas_20 = Math.floor( (valor_entrada - novo_valor) / 2000);
  novo_valor += (2000 * notas_20);
  var notas_10 = Math.floor( (valor_entrada - novo_valor) / 1000);
  novo_valor += (1000 * notas_10);
  var notas_5 = Math.floor( (valor_entrada - novo_valor) / 500);
  novo_valor += (500 * notas_5);
  var notas_2 = Math.floor( (valor_entrada - novo_valor) / 200);
  novo_valor += (200 * notas_2);
  var moeda_1 = Math.floor( (valor_entrada - novo_valor) / 100);
  novo_valor += (100 * moeda_1);
  var moeda_05 = Math.floor( (valor_entrada - novo_valor) / 50);
  novo_valor += (50 * moeda_05);
  var moeda_25 = Math.floor( (valor_entrada - novo_valor) / 25);
  novo_valor += (25 * moeda_25);
  var moeda_10 = Math.floor( (valor_entrada - novo_valor) / 10);
  novo_valor += (10 * moeda_10);
  var moeda_005 = Math.floor( (valor_entrada - novo_valor) / 5);
  novo_valor += (5 * moeda_005);
  var moeda_001 = Math.floor( (valor_entrada - novo_valor) / 1);
  novo_valor += (1 * moeda_001);

  console.log(`NOTAS:`);
  console.log(`${notas_100} nota(s) de R$ 100.00`);
  console.log(`${notas_50} nota(s) de R$ 50.00`);
  console.log(`${notas_20} nota(s) de R$ 20.00`);
  console.log(`${notas_10} nota(s) de R$ 10.00`);
  console.log(`${notas_5} nota(s) de R$ 5.00`);
  console.log(`${notas_2} nota(s) de R$ 2.00`);
  console.log(`MOEDAS:`);
  console.log(`${moeda_1} moeda(s) de R$ 1.00`);
  console.log(`${moeda_05} moeda(s) de R$ 0.50`);
  console.log(`${moeda_25} moeda(s) de R$ 0.25`);
  console.log(`${moeda_10} moeda(s) de R$ 0.10`);
  console.log(`${moeda_005} moeda(s) de R$ 0.05`);
  console.log(`${moeda_001} moeda(s) de R$ 0.01`);

/*
  Com node:

  const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Digite o valor: ', (valorInput) => {

    var valor_entrada = parseFloat(valorInput * 100); // coloca a entrada em undiades de Centavos

    var notas_100 = Math.floor(valor_entrada / 10000);
    var novo_valor = (10000 * notas_100);
    var notas_50 = Math.floor( ( valor_entrada - novo_valor ) / 5000);
    novo_valor += (5000 * notas_50);
    var notas_20 = Math.floor( (valor_entrada - novo_valor) / 2000);
    novo_valor += (2000 * notas_20);
    var notas_10 = Math.floor( (valor_entrada - novo_valor) / 1000);
    novo_valor += (1000 * notas_10);
    var notas_5 = Math.floor( (valor_entrada - novo_valor) / 500);
    novo_valor += (500 * notas_5);
    var notas_2 = Math.floor( (valor_entrada - novo_valor) / 200);
    novo_valor += (200 * notas_2);
    var moeda_1 = Math.floor( (valor_entrada - novo_valor) / 100);
    novo_valor += (100 * moeda_1);
    var moeda_05 = Math.floor( (valor_entrada - novo_valor) / 50);
    novo_valor += (50 * moeda_05);
    var moeda_25 = Math.floor( (valor_entrada - novo_valor) / 25);
    novo_valor += (25 * moeda_25);
    var moeda_10 = Math.floor( (valor_entrada - novo_valor) / 10);
    novo_valor += (10 * moeda_10);
    var moeda_005 = Math.floor( (valor_entrada - novo_valor) / 5);
    novo_valor += (5 * moeda_005);
    var moeda_001 = Math.floor( (valor_entrada - novo_valor) / 1);
    novo_valor += (1 * moeda_001);

    console.log(`NOTAS:`);
    console.log(`${notas_100} nota(s) de R$ 100.00`);
    console.log(`${notas_50} nota(s) de R$ 50.00`);
    console.log(`${notas_20} nota(s) de R$ 20.00`);
    console.log(`${notas_10} nota(s) de R$ 10.00`);
    console.log(`${notas_5} nota(s) de R$ 5.00`);
    console.log(`${notas_2} nota(s) de R$ 2.00`);
    console.log(`MOEDAS:`);
    console.log(`${moeda_1} moeda(s) de R$ 1.00`);
    console.log(`${moeda_05} moeda(s) de R$ 0.50`);
    console.log(`${moeda_25} moeda(s) de R$ 0.25`);
    console.log(`${moeda_10} moeda(s) de R$ 0.10`);
    console.log(`${moeda_005} moeda(s) de R$ 0.05`);
    console.log(`${moeda_001} moeda(s) de R$ 0.01`);
    
    rl.close();

  });
  
*/
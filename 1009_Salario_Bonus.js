/*
  Faça um programa que leia o nome de um vendedor, o seu salário fixo e o total de vendas efetuadas por ele no mês (em dinheiro). Sabendo que este vendedor ganha 15% de comissão sobre suas vendas efetuadas, informar o total a receber no final do mês, com duas casas decimais.

  Entrada
  O arquivo de entrada contém um texto (primeiro nome do vendedor) e 2 valores de dupla precisão (double) com duas casas decimais, representando o salário fixo do vendedor e montante total das vendas efetuadas por este vendedor, respectivamente.

  Saída
  Imprima o total que o funcionário deverá receber, conforme exemplo fornecido.

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

var nome_vendedor = lines.shift();
var salario_fixo = parseFloat(lines.shift());
var total_vendas = parseFloat(lines.shift());

var comissao = parseFloat((15/100) * total_vendas);

var total_receber = parseFloat(salario_fixo + comissao);

console.log('TOTAL = R$ ' + total_receber.toFixed(2));

/*
  No navegador:

  var nome_vendedor = prompt("Digite seu nome: ");
  var salario_fixo = parseFloat(prompt("Digite seu salario: "));
  var total_vendas = parseFloat(prompt("Digite o total de vendas: "));

  var comissao = parseFloat((15/100) * total_vendas);

  var total_receber = parseFloat(salario_fixo + comissao);

  console.log('TOTAL = R$ ', total_receber.toFixed(2));

*/
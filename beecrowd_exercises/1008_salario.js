/*
    Escreva um programa que leia o número de um funcionário, seu número de horas trabalhadas, o valor que recebe por hora e calcula o salário desse funcionário. A seguir, mostre o número e o salário do funcionário, com duas casas decimais.

    Entrada
    O arquivo de entrada contém 2 números inteiros e 1 número com duas casas decimais, representando o número, quantidade de horas trabalhadas e o valor que o funcionário recebe por hora trabalhada, respectivamente.

    Saída
    Imprima o número e o salário do funcionário, conforme exemplo fornecido, com um espaço em branco antes e depois da igualdade. No caso do salário, também deve haver um espaço em branco após o $.
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

var numero_funcionario = lines.shift();
var horas_trabalhadas = lines.shift();
var valor_hora = lines.shift();
var salario = horas_trabalhadas * valor_hora;

console.log("NUMBER = " + numero_funcionario);
console.log("SALARY = U$ " + salario.toFixed(2));

/*
    No navegador:

    var numero_funcionario = parseFloat(prompt("Digite o numero do funcionário: "));
    var horas_trabalhadas = parseInt(prompt("Digite as horas trabalhadas: "));
    var valor_hora = parseFloat(prompt("Digite o valor hota: "));
    var salario = horas_trabalhadas * valor_hora;

    console.log("NUMBER = " + numero_funcionario);
    console.log("SALARY = U$ " + salario.toFixed(2));
*/
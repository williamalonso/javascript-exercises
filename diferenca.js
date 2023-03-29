/*
    Leia quatro valores inteiros A, B, C e D. A seguir, calcule e mostre a diferença do produto de A e B pelo produto de C e D segundo a fórmula: DIFERENCA = (A * B - C * D).

    Entrada
    O arquivo de entrada contém 4 valores inteiros.

    Saída
    Imprima a mensagem DIFERENCA com todas as letras maiúsculas, conforme exemplo abaixo, com um espaço em branco antes e depois da igualdade.
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

var A = lines.shift();
var B = lines.shift();
var C = lines.shift();
var D = lines.shift();

var diferenca = ( (A * B) - (C * D) );
console.log(`DIFERENCA = ${diferenca}`);

/*
    No navegador:

    var A = prompt("Digite o valor de A: ");
    var B = prompt("Digite o valor de B: ");
    var C = prompt("Digite o valor de C: ");
    var D = prompt("Digite o valor de D: ");
    
    var diferenca = ( (A * B) - (C * D) );

    console.log(`DIFERENCA = ${diferenca}`);

*/
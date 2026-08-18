/*
    Leia 2 valores de ponto flutuante de dupla precisão A e B, que correspondem a 2 notas de um aluno. A seguir, calcule a média do aluno, sabendo que a nota A tem peso 3.5 e a nota B tem peso 7.5 (A soma dos pesos portanto é 11). Assuma que cada nota pode ir de 0 até 10.0, sempre com uma casa decimal.

    Entrada
    O arquivo de entrada contém 2 valores com uma casa decimal cada um.

    Saída
    Imprima a mensagem "MEDIA" e a média do aluno conforme exemplo abaixo, com 5 dígitos após o ponto decimal e com um espaço em branco antes e depois da igualdade. Utilize variáveis de dupla precisão (double) e como todos os problemas, não esqueça de imprimir o fim de linha após o resultado, caso contrário, você receberá "Presentation Error".
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

var nota_A = parseFloat(lines.shift());
var nota_B = parseFloat(lines.shift());
var media = parseFloat( ( (nota_A * 3.5) + (nota_B * 7.5) ) / 11);
console.log('MEDIA = ' + media.toFixed(5));

/*
    Em web:

    var nota_A = parseFloat(prompt('Digite o valor de A: '));
    var nota_B = parseFloat(prompt('Digite o valor de B: '));
    var media = parseFloat( ( (nota_A * 3.5) + (nota_B * 7.5) ) / 11);

    console.log('MEDIA = ' + media.toFixed(5));
*/

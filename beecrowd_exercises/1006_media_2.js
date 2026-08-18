/*
    Leia 3 valores, no caso, variáveis A, B e C, que são as três notas de um aluno. A seguir, calcule a média do aluno, sabendo que a nota A tem peso 2, a nota B tem peso 3 e a nota C tem peso 5. Considere que cada nota pode ir de 0 até 10.0, sempre com uma casa decimal.

    Entrada
    O arquivo de entrada contém 3 valores com uma casa decimal, de dupla precisão (double).

    Saída
    Imprima a mensagem "MEDIA" e a média do aluno conforme exemplo abaixo, com 1 dígito após o ponto decimal e com um espaço em branco antes e depois da igualdade. Assim como todos os problemas, não esqueça de imprimir o fim de linha após o resultado, caso contrário, você receberá "Presentation Error".
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
var nota_C = parseFloat(lines.shift());
var nota_final = ( (nota_A*2) + (nota_B*3) + (nota_C*5) ) / 10;

console.log("MEDIA = " + nota_final.toFixed(1));

/* 
    Em Web:

    var nota_A = parseFloat(prompt("Digite o valor da primeira nota: "));
    var nota_B = parseFloat(prompt("Digite o valor da segunda nota: "));
    var nota_C = parseFloat(prompt("Digite o valor da terceira nota: "));
    var nota_final = ( (nota_A*2) + (nota_B*3) + (nota_C*5) ) / 10;
    console.log("MEDIA = " + nota_final.toFixed(1));
*/

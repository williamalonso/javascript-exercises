/*

Leia 2 valores inteiros (A e B). Após, o programa deve mostrar uma mensagem "Sao Multiplos" ou "Nao sao Multiplos", indicando se os valores lidos são múltiplos entre si.

Entrada
A entrada contém valores inteiros.

Saída
A saída deve conter uma das mensagens conforme descrito acima.

Exemplo de Entrada:

6 24
6 25

Exemplo de Saída:

Sao Multiplos
Nao sao Multiplos

*/

const fs = require('fs');
const local = false; // Mude para 'true' se estiver testando localmente

const input = local 
  ? fs.readFileSync('input.txt', 'utf8')
  : fs.readFileSync('/dev/stdin', 'utf8');

var lines = input.split(' ');

var a = parseInt(lines.shift());
var b = parseInt(lines.shift());

if( a%b == 0 ||  b%a == 0) {
  console.log("Sao Multiplos");
} else {
  console.log("Nao sao Multiplos");
}
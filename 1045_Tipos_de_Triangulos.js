/*
Leia 3 valores de ponto flutuante A, B e C e ordene-os em ordem decrescente, de modo que o lado A representa o maior dos 3 lados. A seguir, determine o tipo de triângulo que estes três lados formam, com base nos seguintes casos, sempre escrevendo uma mensagem adequada:

se A ≥ B+C, apresente a mensagem: NAO FORMA TRIANGULO
se A^2 = B^2 + C^2, apresente a mensagem: TRIANGULO RETANGULO
se A^2 > B^2 + C^2, apresente a mensagem: TRIANGULO OBTUSANGULO
se A^2 < B^2 + C^2, apresente a mensagem: TRIANGULO ACUTANGULO
se os três lados forem iguais, apresente a mensagem: TRIANGULO EQUILATERO
se apenas dois dos lados forem iguais, apresente a mensagem: TRIANGULO ISOSCELES

Entrada
  - A entrada contem três valores de ponto flutuante de dupla precisão A (0 < A) , B (0 < B) e C (0 < C).

Saída
  - Imprima todas as classificações do triângulo especificado na entrada.

Exemplos de Entrada

7.0 5.0 7.0
6.0 6.0 10.0
6.0 6.0 6.0
5.0 7.0 2.0
6.0 8.0 10.0

Exemplos de Saída

TRIANGULO ACUTANGULO
TRIANGULO ISOSCELES

TRIANGULO OBTUSANGULO
TRIANGULO ISOSCELES

TRIANGULO ACUTANGULO
TRIANGULO EQUILATERO

NAO FORMA TRIANGULO

TRIANGULO RETANGULO

*/

const fs = require('fs');
const local = true; // Mude para 'true' se estiver testando localmente

const input = local
  ? fs.readFileSync('input.txt', 'utf8')
  : fs.readFileSync('/dev/stdin', 'utf8');

var lines = input.split(' '); // serve para separar os valores de entrada em um array

var a = parseFloat(lines.shift()); // serve para pegar o primeiro valor do array e converter para float
var b = parseFloat(lines.shift()); // serve para pegar o segundo valor do array e converter para float
var c = parseFloat(lines.shift()); // serve para pegar o terceiro valor do array e converter para float

// Ordena os valores em ordem decrescente
const [lado_a, lado_b, lado_c] = [a, b, c].sort( (x, y) => y-x );

if ( lado_a >= lado_b+lado_c ) {
  console.log("NAO FORMA TRIANGULO");
} else {
  if ( lado_a**2 === lado_b**2 + lado_c**2 ) {
    console.log("TRIANGULO RETANGULO");
  } 
  if ( lado_a**2 > lado_b**2 + lado_c**2 ) {
    console.log("TRIANGULO OBTUSANGULO");
  } 
  if ( lado_a**2 < lado_b**2 + lado_c**2 ) {
    console.log("TRIANGULO ACUTANGULO");
  } 
  if ( lado_a === lado_b && lado_b === lado_c ) {
    console.log("TRIANGULO EQUILATERO");
  } else if ( lado_a === lado_b || lado_b === lado_c || lado_a === lado_c ) {
    console.log("TRIANGULO ISOSCELES");
  }
}
/*
  Leia 2 valores com uma casa decimal (x e y), que devem representar as coordenadas de um ponto em um plano. A seguir, determine qual o quadrante ao qual pertence o ponto, ou se está sobre um dos eixos cartesianos ou na origem (x = y = 0).

     y
  Q2 | Q1
  --------  x
  Q3 | Q4

  Se o ponto estiver na origem, escreva a mensagem “Origem”.

  Se o ponto estiver sobre um dos eixos escreva “Eixo X” ou “Eixo Y”, conforme for a situação.

  Entrada
  A entrada contem as coordenadas de um ponto.

  Saída
  A saída deve apresentar o quadrante em que o ponto se encontra.

  Exemplo de Entrada	Exemplo de Saída
  4.5 -2.2            Q4
  0.1 0.1             Q1
  0.0 0.0             Origem
*/

var input = require('fs').readFileSync('entrada.txt', 'utf8');
var lines = input.split(/\s+/);

var x, y;

x = parseFloat(lines[0]);
y = parseFloat(lines[1]);

if ( x > 0 && y > 0) {
  console.log(`Q1`);
} else if (x < 0 && y < 0) {
  console.log(`Q3`);
} else if (x < 0 && y > 0) {
  console.log(`Q2`);
} else if (x > 0 && y < 0) {
  console.log(`Q4`);
} else if (x === 0 && y === 0) {
  console.log(`Origem`);
} else if (x === 0 && y !== 0) {
  console.log(`Eixo Y`);
} else {
  console.log(`Eixo X`);
}
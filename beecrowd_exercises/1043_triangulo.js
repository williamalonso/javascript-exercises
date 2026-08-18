/*

  Leia 3 valores reais (A, B e C) e verifique se eles formam ou não um triângulo. Em caso positivo, calcule o perímetro do triângulo e apresente a mensagem:

  Perimetro = XX.X

  Em caso negativo, calcule a área do trapézio que tem A e B como base e C como altura, mostrando a mensagem

  Area = XX.X

Entrada
  A entrada contém três valores reais.Ex: "6.0 4.0 2.0"

Saída
  O resultado deve ser apresentado com uma casa decimal.Ex: "Area = 10.0"

*/

const fs = require('fs');
const local = false; // Mude para 'true' se estiver testando localmente

const input = local 
  ? fs.readFileSync('input.txt', 'utf8')
  : fs.readFileSync('/dev/stdin', 'utf8');

var lines = input.split(' ');

var a = parseFloat(lines.shift());
var b = parseFloat(lines.shift());
var c = parseFloat(lines.shift());

if (a + b > c && a + c > b && b + c > a) {
  const perimetro = a + b + c;
  console.log(`Perimetro = ${perimetro.toFixed(1)}`);
} else {
  const area = (a + b) * c / 2;
  console.log(`Area = ${area.toFixed(1)}`);
}
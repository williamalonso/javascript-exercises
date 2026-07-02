/*
  Leia a hora inicial e a hora final de um jogo. A seguir calcule a duração do jogo, sabendo que o mesmo pode começar em um dia e terminar em outro, tendo uma duração mínima de 1 hora e máxima de 24 horas.

  Entrada
  A entrada contém dois valores inteiros representando a hora de início e a hora de fim do jogo.

  Saída
  Apresente a duração do jogo conforme exemplo abaixo.


  Exemplo:

  Entrada -> Saída
  16 2 -> O JOGO DUROU 10 HORA(S)
  0 0 -> O JOGO DUROU 24 HORA(S)
  2 16 -> O JOGO DUROU 14 HORA(S)

*/

const fs = require('fs');
const local = false; // Mude para 'true' se estiver testando localmente

const input = local
  ? fs.readFileSync('input.txt', 'utf8')
  : fs.readFileSync('/dev/stdin', 'utf8');

var lines = input.split(' '); // serve para separar os valores de entrada em um array

var hora_inicial = parseInt(lines.shift()); // serve para pegar o primeiro valor do array e converter para inteiro
var hora_final = parseInt(lines.shift()); // serve para pegar o segundo valor do array e converter para inteiro

if(hora_inicial === hora_final) {
  console.log("O JOGO DUROU 24 HORA(S)");
} else if (hora_final > hora_inicial) {
  console.log(`O JOGO DUROU ${hora_final - hora_inicial} HORA(S)`);
} else {
  console.log(`O JOGO DUROU ${(24 - hora_inicial) + hora_final} HORA(S)`);
}
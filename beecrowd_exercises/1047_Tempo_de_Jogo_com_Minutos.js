/*
  Leia a hora inicial, minuto inicial, hora final e minuto final de um jogo. A seguir calcule a duração do jogo.

  Obs: O jogo tem duração mínima de um (1) minuto e duração máxima de 24 horas.

  Entrada
  Quatro números inteiros representando a hora de início e fim do jogo.

  Saída
  Mostre a seguinte mensagem: “O JOGO DUROU XXX HORA(S) E YYY MINUTO(S)” .

  Entrada -> Saída
  7 8 9 10 -> O JOGO DUROU 2 HORA(S) E 2 MINUTO(S)
  7 7 7 7 -> O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)
  7 10 8 9 -> O JOGO DUROU 0 HORA(S) E 59 MINUTO(S)
*/

const fs = require('fs');
const local = false; // Mude para 'true' se estiver testando localmente

const input = local
  ? fs.readFileSync('input.txt', 'utf8')
  : fs.readFileSync('/dev/stdin', 'utf8');

  var lines = input.split(' '); // serve para separar os valores de entrada em um array

var hora_inicial = parseInt(lines.shift()); // serve para pegar o primeiro valor do array
var minuto_inicial = parseInt(lines.shift()); // serve para pegar o segundo valor do array
var hora_final = parseInt(lines.shift()); // serve para pegar o terceiro valor do array
var minuto_final = parseInt(lines.shift()); // serve para pegar o quarto valor do array

var hora_inicial_em_minutos = hora_inicial * 60;
var hora_final_em_minutos = hora_final * 60;

var duracao_em_minutos = (hora_final_em_minutos + minuto_final) - (hora_inicial_em_minutos + minuto_inicial);

if (duracao_em_minutos <= 0) {
  duracao_em_minutos += 24 * 60; // Adiciona 24 horas em minutos
}

var duracao_horas = Math.floor(duracao_em_minutos / 60); // pega a parte inteira da divisao
var duracao_minutos = duracao_em_minutos % 60; // pega o resto da divisao

console.log(`O JOGO DUROU ${duracao_horas} HORA(S) E ${duracao_minutos} MINUTO(S)`);
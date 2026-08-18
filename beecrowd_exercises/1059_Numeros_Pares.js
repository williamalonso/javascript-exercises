/*
Faça um programa que mostre os números pares entre 1 e 100, inclusive.

Entrada
Neste problema extremamente simples de repetição não há entrada.

Saída
Imprima todos os números pares entre 1 e 100, inclusive se for o caso, um em cada linha

Exemplo de Saída
2
4
6
...
100

*/

const fs = require('fs'); // Importa o módulo 'fs' para ler arquivos do sistema

const local = false; // Mude para 'true' se estiver testando localmente

const input = local
  ? fs.readFileSync('input.txt', 'utf8')
  : fs.readFileSync('/dev/stdin', 'utf8');

for (i = 1; i <= 100; i++) {
  if( i % 2 == 0) {
    console.log(i);
  }
}
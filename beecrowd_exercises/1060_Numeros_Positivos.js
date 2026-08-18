/*
Faça um programa que leia 6 valores. Estes valores serão somente negativos ou positivos (desconsidere os valores nulos). A seguir, mostre a quantidade de valores positivos digitados.

Entrada
Seis valores, negativos e/ou positivos.

Saída
Imprima uma mensagem dizendo quantos valores positivos foram lidos.

Exemplo de Entrada	

7
-5
6
-3.4
4.6
12

Exemplo de Saída

4 valores positivos

*/
const fs = require('fs'); // Importa o módulo 'fs' para ler arquivos do sistema

const local = false; // Mude para 'true' se estiver testando localmente

const input = local
  ? fs.readFileSync('input.txt', 'utf8')
  : fs.readFileSync('/dev/stdin', 'utf8');

const lines = input.split('\n'); // Divide a entrada em linhas

var positiveCount = 0; // Inicializa a contagem de números positivos

for (let i = 0; i < lines.length; i++) {
  const number = parseFloat(lines[i]); // Converte a linha atual para um número de ponto flutuante
  if (number > 0) {
    positiveCount++; // Incrementa a contagem se o número for positivo
  }
}

console.log(`${positiveCount} valores positivos`);
/*

Leia 3 valores inteiros e ordene-os em ordem crescente. No final, mostre os valores em ordem crescente, uma linha em branco e em seguida, os valores na sequência como foram lidos.

Exemplo de Entrada: 7 21 -14

Exemplo de Saída:
  -14
  7
  21

  7
  21
  -14
*/

const fs = require('fs');

// Mude para 'true' se estiver testando localmente
const local = false;

const input = local 
  ? fs.readFileSync('input.txt', 'utf8') 
  : fs.readFileSync('/dev/stdin', 'utf8');

var lines = input.trim().split(' ');

var a = parseInt(lines.shift());
var b = parseInt(lines.shift());
var c = parseInt(lines.shift());

const valoresOriginais = [a, b, c];

const valoresOrdenados = [...valoresOriginais].sort( (a,b) => a-b);

valoresOrdenados.forEach( valor => console.log(valor) );
console.log('');
valoresOriginais.forEach( valor => console.log(valor) );

/*
  No navegador:

  const entradas = prompt("Digite tres números separados por espaco: ");
  
  const valoresOriginais = entradas.split(' ').map(Number);
  
  const valoresOrdenados = [...valoresOriginais].sort( (a,b) => a - b );
  
  valoresOrdenados.forEach( valor => console.log(valor) );
  
  console.log('\n');
  
  valoresOriginais.forEach( valor => console.log(valor) );
*/
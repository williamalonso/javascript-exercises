/*
Neste problema, você deverá ler 3 palavras que definem o tipo de animal possível segundo o esquema abaixo, da esquerda para a direita.  Em seguida conclua qual dos animais seguintes foi escolhido, através das três palavras fornecidas.


vertebrado
  - ave -> carnivoro -> aguia
        -> onivoro -> pomba
  - mamifero -> onivoro -> homem
             -> herbivoro -> vaca
invertebrado
  - inseto -> hematofago -> pulga
           -> herbivoro -> lagarta
  - anelideo -> hematofago -> sanguessuga
              -> onivoro -> minhoca


Entrada
A entrada contém 3 palavras, uma em cada linha, necessárias para identificar o animal segundo a figura acima, com todas as letras minúsculas.

Saída
Imprima o nome do animal correspondente à entrada fornecida.

Exemplo de Entrada | Exemplo de saída
vertebrado
mamifero
onivoro | homem

vertebrado
ave
carnivoro | aguia

invertebrado
anelideo
onivoro | minhoca
*/

const fs = require('fs');
const local = false; // Mude para 'true' se estiver testando localmente

const input = local
  ? fs.readFileSync('input.txt', 'utf8')
  : fs.readFileSync('/dev/stdin', 'utf8');

var lines = input.split('\n'); // serve para separar os valores de entrada em um array

var tipo1 = lines.shift().toString().trim(); // serve para pegar o primeiro valor do array
var tipo2 = lines.shift().toString().trim(); // serve para pegar o segundo valor do array
var tipo3 = lines.shift().toString().trim(); // serve para pegar o terceiro valor do array

if (tipo1 === 'vertebrado') {
  if (tipo2 === 'ave') {
    if (tipo3 === 'carnivoro') {
      console.log('aguia');
    } else if (tipo3 === 'onivoro') {
      console.log('pomba');
    }
  } else if (tipo2 === 'mamifero') {
    if (tipo3 === 'onivoro') {
      console.log('homem');
    } else if (tipo3 === 'herbivoro') {
      console.log('vaca');
    }
  }
} else if (tipo1 === 'invertebrado') {
  if (tipo2 === 'inseto') {
    if (tipo3 === 'hematofago') {
      console.log('pulga');
    } else if (tipo3 === 'herbivoro') {
      console.log('lagarta');
    }
  } else if (tipo2 === 'anelideo') {
    if (tipo3 === 'hematofago') {
      console.log('sanguessuga');
    } else if (tipo3 === 'onivoro') {
      console.log('minhoca');
    }
  }
}
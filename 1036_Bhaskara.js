/*
  Leia 3 valores de ponto flutuante e efetue o cálculo das raízes da equação de Bhaskara. Se não for possível calcular as raízes, mostre a mensagem correspondente “Impossivel calcular”, caso haja uma divisão por 0 ou raiz de numero negativo.

  Entrada
  Leia três valores de ponto flutuante (double) A, B e C.

  Saída
  Se não houver possibilidade de calcular as raízes, apresente a mensagem "Impossivel calcular". Caso contrário, imprima o resultado das raízes com 5 dígitos após o ponto, com uma mensagem correspondente conforme exemplo abaixo. Imprima sempre o final de linha após cada mensagem.
*/
/*
    Método split(): divide uma string em um array de substrings
    
    const str = 'The quick brown fox jumps over the lazy dog.';
    const words = str.split(' ');
    console.log(words);

    Será exibido: Array ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog."]
*/

/*
    Método shift(): remove o primeiro elemento de um array e printa esse elemento

    const array1 = [1,2,3];
    const firstElement = array1.shift();
    console.log(firstElement);

    Será exibido: 1

*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

var valorA = parseFloat( lines.shift() );
var valorB = parseFloat( lines.shift() );
var valorC = parseFloat( lines.shift() );
const Raiz = parseFloat( (valorB*valorB) - (4*valorA*valorC) );

if(valorA === 0.0) {
  console.log(`Impossivel calcular`);
  process.exit(); // Encerra o programa
}

if(Raiz < 0) {
  console.log(`Impossivel calcular`);
  process.exit(); // Encerra o programa
} else {
  X1 = ( ( (-valorB) + (Math.sqrt( Raiz )) ) / (2*valorA) );
  X2 = ( ( (-valorB) - (Math.sqrt( Raiz )) ) / (2*valorA) );

  console.log(`R1 = ${X1.toFixed(5)}`);
  console.log(`R2 = ${X2.toFixed(5)}`);
}


/*
  Com node(terminal):

  const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Digite o valor de A: ', (valorA) => {
    rl.question('Digite o valor de B: ', (valorB) => {
      rl.question('Digite o valor de C: ', (valorC) => {

        const Raiz = parseFloat( (valorB*valorB) - (4*valorA*valorC) );

        if(valorA == 0.0) {
          console.log(`Impossivel calcular`);
          rl.close();
          return;
        }

        if(Raiz < 0) {
          console.log(`Impossivel calcular`);
          rl.close();
          return;
        } else {
          X1 = ( ( (-valorB) + (Math.sqrt( Raiz )) ) / (2*valorA) );
          X2 = ( ( (-valorB) - (Math.sqrt( Raiz )) ) / (2*valorA) );
        
          console.log(`R1 = ${X1.toFixed(5)}`);
          console.log(`R2 = ${X2.toFixed(5)}`);
        }

        rl.close();

      });
    });
  });
*/
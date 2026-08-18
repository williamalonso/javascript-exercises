/*
  #Desenvolva um programa que leia o nome, idade e sexo de 4 pessoas. No final do programa, mostre: a média de idade do grupo, qual é o nome do homem mais velho e quantas mulheres têm menos de 20 anos.
*/

var nomes = [];
var nome_pessoaA = prompt("Digite o primeiro nome: ");
var nome_pessoaB = prompt("Digite o segundo nome: ");
var nome_pessoaC = prompt("Digite o terceiro nome: ");
var nome_pessoaD = prompt("Digite o quarto nome: ");
nomes.push(nome_pessoaA, nome_pessoaB, nome_pessoaC, nome_pessoaD);
console.log(nomes);

var idades = [];
var idade_pessoaA = parseInt(prompt("Digite a primeira idade: "));
var idade_pessoaB = parseInt(prompt("Digite a segunda idade: "));
var idade_pessoaC = parseInt(prompt("Digite a terceira idade: "));
var idade_pessoaD = parseInt(prompt("Digite a quarta idade: "));
idades.push(idade_pessoaA, idade_pessoaB, idade_pessoaC, idade_pessoaD);
console.log(idades);

var sexos = [];
var sexo_pessoaA = prompt("Digite o sexo da primeira pessoa: ");
var sexo_pessoaB = prompt("Digite o sexo da segunda pessoa: ");
var sexo_pessoaC = prompt("Digite o sexo da terceira pessoa: ");
var sexo_pessoaD = prompt("Digite o sexo da quarta pessoa: ");
sexos.push(sexo_pessoaA, sexo_pessoaB, sexo_pessoaC, sexo_pessoaD);
console.log(sexos);

var media_idade = (idade_pessoaA + idade_pessoaB + idade_pessoaC + idade_pessoaD) / 4;

var idade_maisVelho = 0;
var homem_maisVelho = '';

for(let i=0;i<4;i++) {
  if(idade_maisVelho < idades[i]) {
    idade_maisVelho = idades[i];
    homem_maisVelho = nomes[i];
  }
}

var mulheres_abaixo = 0;

for(let i=0;i<4;i++) {
  if(sexos[i] == 's') {
    if(idades[i] < 20) {
      mulheres_abaixo++;
    }
  }
}


console.log(`Média de idade = ${media_idade} anos`);
console.log(`Homem mais velho = ${homem_maisVelho}`);
console.log(`Mulheres abaixo de 20 anos = ${mulheres_abaixo}`);
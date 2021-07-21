// Vamos criar uma função que calcula o IMC de uma pessoa, dado a altura em m e a massa em kg.

function calculaIMC(altura, peso){
  return  peso / (altura * altura);
}
console.log(calculaIMC(1.54,48));
// Crie um programa que me diga como lucrar nesta situação: quero vender uma bicicleta que 60% do seu valor é R$300, por quanto devo vendê-la para lucrar 25%?

let compra = 300;
let calculo = (compra * 60) / 100;
let lucro = (calculo * 25) /100;
let venda = calculo + lucro;

console.log(venda);
// Faça um programa que dado um número, imprime no (console.log) a tabuada do mesmo de 1 a 10.

function tabuada(valor){
    for(var i = 1; i < 11; i++){
        console.log(`${i} X ${valor} = ${i*valor}`) ;
    }
}
tabuada(4);

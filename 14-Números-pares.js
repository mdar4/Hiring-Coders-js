//Imprima na tela os números pares existentes entre 0 e 100.

function imprimePar(){
    for(i=0; i < 101; i++){
        if (i % 2 === 0 ){
            console.log(i)
        }
    }
}
imprimePar();
// Utilizando os conceitos que estudamos, vamos criar um programa que funcionará como um sinal de transito.

let cor = ['vermelho', 'amarelo', 'verde'];

function sinal(){ 
    if (cor === 'vermelho'){
        return 'Pare';
    }
    else if (cor === 'amarelo'){
        return 'Atenção';
    }else {
        return 'Siga em frente'
    }
    
}
console.log(sinal(cor[2]));
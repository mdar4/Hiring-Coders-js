// Utilizando os conceitos que estudamos, vamos criar um programa que irá nos informar os dias de aula para a nossa turma.

let semana = ['segunda','terça','quarta','quinta','sexta','sábado','domingo'];
console.log('Dias de aula:')
function diaDeAula(item) {
    console.log(item);
}
semana.forEach(diaDeAula);
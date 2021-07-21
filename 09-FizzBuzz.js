// FizzBuzz
// divisível por 3 => 'Fizz',
// divisivel por 5 => 'Buzz',
// divisivel por 3 e 5 => 'FizzBuzz',
// Se não for um número => 'Não é um número'
// Se não for divisível nem por 3 e nem por 5 => Entrada

let resultado = fizzBuzz();
console.log(resultado);

function fizzBuzz(entrada) {
	if (typeof entrada !== 'number')
		return 'Não é um número';
	if (entrada % 3 === 0)
		return 'Fizz';
	if (entrada % 5 === 0)
		return 'Buzz';
	if ((entrada % 3 === 0)  && (entrada % 5 === 0))
		return 'FizzBuzz';
	
	return entrada;
	
}
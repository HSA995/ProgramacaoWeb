let numeroSecreto = geradorDeNumeroAleatorio();
let chute;
console.log(numeroSecreto);

while (chute != numeroSecreto) {

    chute = prompt('Escolha um número de 1 a 20:');

    if (chute == numeroSecreto) {

        console.log('Parabéns! Acertou o número secreto!');

    } else if (chute > numeroSecreto) {

        console.log('O número secreto é menor!');

    } else if (chute < numeroSecreto) {

        console.log('O número secreto é maior!');
    }
}

function geradorDeNumeroAleatorio(){
    return Math.floor(Math.random() * 20) + 1;
}

console.log(numeroSecreto);
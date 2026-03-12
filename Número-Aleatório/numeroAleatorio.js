let numeroSecreto = geradorDeNumeroAleatorio();
let chute;
console.log(numeroSecreto);

while (chute != numeroSecreto) {

    chute = prompt('Escolha um número de 1 a 20:');

    if (chute < numeroSecreto) {

        alert('O número secreto é maior!')
        console.log('O número secreto é maior!')

    } else if (chute > numeroSecreto) {

        alert1('O número secreto é menor!');
        console.log('O número secreto é menor!');

    } else  {
        alert(`Parabéns! Acertou o número secreto! ${numeroSecreto}`);
        console.log(`Parabéns! Acertou o número secreto! ${numeroSecreto}`);
       break;
    }
    
}

function geradorDeNumeroAleatorio(){
    return Math.floor(Math.random() * 20) + 1;
}

console.log(numeroSecreto);
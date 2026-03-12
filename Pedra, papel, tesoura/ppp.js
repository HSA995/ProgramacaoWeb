function jogo(){

 let opcoes = ["pedra", "papel", "tesoura"];
 let jogador = prompt('Escolha entre "pedra", "papel" e "tesoura":').toLowerCase();
 let computador = opcoes[Math.floor(Math.random() * 3)];

 alert(`Computador escolheu: ${computador}`);

     
    if (
        (jogador === "pedra" && computador === "tesoura") ||
        (jogador === "papel" && computador === "pedra") ||
        (jogador === "tesoura" && computador === "papel")
    ) {

        alert("Você venceu!");

    }else if (jogador === computador) {

        alert("Empate!");

    } else {

        alert("Computador venceu! HAHAHAHAHAHAHAHAHA");
    }

}

jogo();
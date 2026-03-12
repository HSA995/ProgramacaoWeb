let termos =  6  //Number(prompt("Digite a quantidade de termos:"));

let numero = 0;
let soma = 0;
let serie = "";

for (let i = 1; i <= termos; i++) {

    numero = numero * 10 + 1; // cria 1, 11, 111...

    soma += numero;

    serie += numero;

    if (i < termos) {
        serie += " + ";
    }
    
}

console.log(serie);
console.log("A soma é:", soma);
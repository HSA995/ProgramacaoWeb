let numeroUsuario = prompt('Escolha o numero que irá sediar a tabuada:');
let maxTabuada = prompt('Escolha a quantidade de multiplicações:')

// valor inicial / condição do laço / final de cada laço 
for(i = 1; i <= maxTabuada; i++){
    let multiplicacao = numeroUsuario * i;
    console.log(`${numeroUsuario} x ${i} = ${multiplicacao}`);
}
// CONTADOR
let contador = 0;

const btnMais = document.getElementById("btnMais");
const btnMenos = document.getElementById("btnMenos");
const spanContador = document.getElementById("contador");

btnMais.addEventListener("click", () => {
    contador++;
    spanContador.textContent = contador;
});

btnMenos.addEventListener("click", () => {
    if (contador > 0) {
        contador--;
        spanContador.textContent = contador;
    } else {
        alert("O contador já está em zero!");
    }
});

// INPUT TEXTO
const inputTexto = document.getElementById("inputTexto");
const divParagrafos = document.getElementById("paragrafos");
const charCount = document.getElementById("charCount");

// Contador de caracteres (sem espaços)
inputTexto.addEventListener("input", () => {
    let texto = inputTexto.value.replace(/\s/g, "");
    charCount.textContent = texto.length;
});

// Adicionar parágrafo ao pressionar Enter
inputTexto.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        let texto = inputTexto.value.trim();

        if (texto !== "") {
            let p = document.createElement("p");
            p.textContent = texto;
            divParagrafos.appendChild(p);

            inputTexto.value = "";
            charCount.textContent = 0;
        }
    }
});

// LISTA
const btnLista = document.getElementById("btnLista");
const tipoLista = document.getElementById("tipoLista");
const divListas = document.getElementById("listas");

btnLista.addEventListener("click", () => {
    let tipo = tipoLista.value;
    let lista = document.createElement(tipo);

    // cria 3 itens
    for (let i = 1; i <= 3; i++) {
        let item = document.createElement("li");
        item.textContent = "Item " + i;
        lista.appendChild(item);
    }

    divListas.appendChild(lista);
});

// RESET
const reset = document.getElementById("reset");

reset.addEventListener("click", () => {
    contador = 0;
    spanContador.textContent = 0;

    divParagrafos.innerHTML = "";
    divListas.innerHTML = "";

    inputTexto.value = "";
    charCount.textContent = 0;
});
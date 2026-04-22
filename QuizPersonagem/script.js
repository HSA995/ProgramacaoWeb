// Classes (Orientação a Objetos)

class Personagem {
    constructor(nome, descricao, imagem) {
        this.nome = nome;
        this.descricao = descricao;
        this.imagem = imagem;
        this.pontuacao = 0; // Estado inicial
    }

    adicionarPontos(pontos) {
        this.pontuacao += pontos;
    }

    resetarPontuacao() {
        this.pontuacao = 0;
    }
}

class Pergunta {
    constructor(texto, opcoes) {
        this.texto = texto;
        // Opções é uma lista de objetos: { texto: "...", pontos: [ptsA, ptsB, ptsC] }
        this.opcoes = opcoes; 
    }
}

class JogoQuiz {
    constructor() {
        // Inicializando os personagens
        this.personagens = [
            new Personagem("Walter White", "Você é calculista, brilhante e extremamente ambicioso. Costuma justificar suas ações moralmente questionáveis pelo bem da 'família', mas no fundo, você gosta do poder.", "assets/walter_white.jpg"),
            new Personagem("Jesse Pinkman", "Você age muito pela emoção e possui um forte senso de lealdade e justiça no fundo. Pode parecer caótico e imprudente, mas tem um coração bom.", "assets/jesse_pinkman.jpg"),
            new Personagem("Saul Goodman", "Você é astuto, falante e sabe exatamente como contornar as regras. Seu talento para a negociação tira você (e os outros) das piores enrascadas.", "assets/saul_goodman.jpg")
        ];

        // Mapeamento dos pontos: [Pontos Walter, Pontos Jesse, Pontos Saul]
        this.perguntas = [
            new Pergunta("Você descobre que tem pouco tempo de vida. O que você faz?", [
                { texto: "Elaboro um plano arriscado para deixar minha família rica.", pontos: [3, 1, 2] },
                { texto: "Gasto todas as minhas economias curtindo a vida intensamente.", pontos: [1, 3, 2] },
                { texto: "Procuro falhas legais no meu seguro de vida para multiplicar o valor.", pontos: [2, 1, 3] }
            ]),
            new Pergunta("Como você costuma resolver um grande problema no trabalho?", [
                { texto: "Com ciência, lógica e uma precisão implacável.", pontos: [3, 1, 2] },
                { texto: "Na base do improviso e chamando meus amigos para ajudar.", pontos: [1, 3, 2] },
                { texto: "Usando muita lábia e manipulando a situação a meu favor.", pontos: [2, 1, 3] }
            ]),
            new Pergunta("O que você mais valoriza em um parceiro de negócios?", [
                { texto: "Competência técnica e obediência absoluta.", pontos: [3, 2, 1] },
                { texto: "Lealdade verdadeira, alguém que não me apunhale pelas costas.", pontos: [1, 3, 2] },
                { texto: "A capacidade de me manter fora da cadeia.", pontos: [2, 1, 3] }
            ]),
            new Pergunta("Qual o seu estilo na hora de se vestir?", [
                { texto: "Roupas neutras, discretas e práticas.", pontos: [3, 1, 2] },
                { texto: "Roupas largas, toucas e jaquetas chamativas.", pontos: [1, 3, 2] },
                { texto: "Ternos coloridos, gravatas vibrantes e acessórios.", pontos: [1, 2, 3] }
            ]),
            new Pergunta("Você se meteu em problemas com a polícia. Quem você chama?", [
                { texto: "Ninguém. Eu mesmo resolvo apagando as evidências.", pontos: [3, 2, 1] },
                { texto: "Meus amigos da rua para me dar esconderijo.", pontos: [1, 3, 2] },
                { texto: "O advogado criminalista mais malandro da cidade.", pontos: [2, 1, 3] }
            ]),
            new Pergunta("Qual é o seu local de trabalho dos sonhos?", [
                { texto: "Um laboratório impecável com tecnologia de ponta.", pontos: [3, 1, 2] },
                { texto: "Não me importo, desde que me paguem bem. Até um trailer serve.", pontos: [2, 3, 1] },
                { texto: "Um escritório espalhafatoso em uma galeria comercial.", pontos: [1, 2, 3] }
            ]),
            new Pergunta("O que o dinheiro significa para você?", [
                { texto: "Poder, controle e o tamanho do meu império.", pontos: [3, 1, 2] },
                { texto: "Diversão, festas e liberdade imediata.", pontos: [1, 3, 2] },
                { texto: "A recompensa merecida por facilitar a vida dos outros.", pontos: [2, 1, 3] }
            ]),
            new Pergunta("Como você lida com a culpa por algo errado que fez?", [
                { texto: "Racionalizo a situação. Fiz o que precisava ser feito.", pontos: [3, 1, 2] },
                { texto: "Sofro intensamente, perco o sono e busco fugir da realidade.", pontos: [1, 3, 2] },
                { texto: "Bebo um drink, sigo em frente e foco no próximo cliente.", pontos: [2, 1, 3] }
            ]),
            new Pergunta("Qual seria sua 'arma' de escolha em uma disputa?", [
                { texto: "Minha inteligência e reações químicas mortais.", pontos: [3, 1, 2] },
                { texto: "Uma arma de fogo escondida.", pontos: [2, 3, 1] },
                { texto: "Um telefone e meus contatos no submundo.", pontos: [1, 2, 3] }
            ]),
            new Pergunta("Qual frase mais define sua postura diante da vida?", [
                { texto: "Eu não estou em perigo. Eu sou o perigo.", pontos: [3, 1, 2] },
                { texto: "Yeah, ciência, cara!", pontos: [1, 3, 2] },
                { texto: "É tudo legal, desde que você não seja pego.", pontos: [2, 1, 3] }
            ])
        ];

        this.perguntaAtual = 0;

        // Recuperando elementos do DOM
        this.telas = {
            inicio: document.getElementById("tela-inicio"),
            quiz: document.getElementById("tela-quiz"),
            resultado: document.getElementById("tela-resultado")
        };
        this.elementosDOM = {
            textoPergunta: document.getElementById("texto-pergunta"),
            containerOpcoes: document.getElementById("opcoes-container"),
            statusPergunta: document.getElementById("status-pergunta")
        };

        this.configurarBotoes();
    }

    configurarBotoes() {
        // Uso de arrow function para não perder o escopo do 'this'
        document.getElementById("btn-iniciar").addEventListener("click", () => this.iniciar());
        document.getElementById("btn-reiniciar").addEventListener("click", () => this.reiniciar());
    }

    trocarTela(telaDestino) {
        // Laço de repetição (for...in) para ocultar todas as telas e mostrar a desejada
        for (let key in this.telas) {
            this.telas[key].classList.remove("ativa");
        }
        telaDestino.classList.add("ativa");
    }

    iniciar() {
        this.perguntaAtual = 0;
        this.personagens.forEach(p => p.resetarPontuacao());
        this.trocarTela(this.telas.quiz);
        this.carregarPergunta();
    }

    carregarPergunta() {
        const perguntaObj = this.perguntas[this.perguntaAtual];
        this.elementosDOM.statusPergunta.innerText = `Pergunta ${this.perguntaAtual + 1} de ${this.perguntas.length}`;
        this.elementosDOM.textoPergunta.innerText = perguntaObj.texto;
        
        // Limpar opções anteriores
        this.elementosDOM.containerOpcoes.innerHTML = "";

        // Gerar os botões dinamicamente
        perguntaObj.opcoes.forEach((opcao) => {
            const btn = document.createElement("button");
            btn.classList.add("opcao-btn");
            btn.innerText = opcao.texto;
            btn.addEventListener("click", () => this.responder(opcao.pontos));
            this.elementosDOM.containerOpcoes.appendChild(btn);
        });
    }

    responder(pontosDaOpcao) {
        // Laço de repetição para distribuir os pontos ocultos aos personagens
        for (let i = 0; i < this.personagens.length; i++) {
            this.personagens[i].adicionarPontos(pontosDaOpcao[i]);
        }

        this.perguntaAtual++;

        // Estrutura condicional para verificar fim do jogo
        if (this.perguntaAtual < this.perguntas.length) {
            this.carregarPergunta();
        } else {
            this.finalizarJogo();
        }
    }

    finalizarJogo() {
        this.trocarTela(this.telas.resultado);

        // Lógica para achar o personagem vencedor
        let personagemVencedor = this.personagens[0];
        
        for (let i = 1; i < this.personagens.length; i++) {
            if (this.personagens[i].pontuacao > personagemVencedor.pontuacao) {
                personagemVencedor = this.personagens[i];
            }
        }

        // Atualizando o DOM com o resultado
        document.getElementById("nome-personagem").innerText = personagemVencedor.nome;
        document.getElementById("img-personagem").src = personagemVencedor.imagem;
        document.getElementById("desc-personagem").innerText = personagemVencedor.descricao;
        document.getElementById("pontos-personagem").innerText = personagemVencedor.pontuacao;
    }

    reiniciar() {
        this.trocarTela(this.telas.inicio);
    }
}

// Inicializando a aplicação quando a página carrega
window.onload = () => {
    new JogoQuiz();
};
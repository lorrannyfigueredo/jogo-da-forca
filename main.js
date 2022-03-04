let palavras = ["PAPAGAIO", "GIRAFA", "CORUJA", "CARNEIRO", "OVELHA", "FORMIGA", "ELEFANTE", "ORNITORRINCO", "GAIVOTA", "ABELHA","CACHORRO", "COELHO", "MORCEGO"]; 
let palavraSorteada;
let listaDinamica = [];
let erros = 6;
let letrasDaPalavra;
let letraErrada= [];

let palavra = document.getElementById('word');
let add = document.getElementById('add-word');
palavra.focus()

add.addEventListener('click', addWord);

function addWord() {
  desenhaTabuleiro()
}
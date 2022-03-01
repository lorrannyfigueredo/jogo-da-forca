let palavras = ["PAPAGAIO", "GIRAFA", "CORUJA", "CARNEIRO", "OVELHA", "FORMIGA", "ELEFANTE", "ORNITORRINCO", "GAIVOTA", "ABELHA","CACHORRO", "COELHO", "MORCEGO"]; 
let palavraSorteada;
let listaDinamica = [];
let erros = 6;
let letrasDaPalavra;
let adicionarPalavra = document.querySelector("#nova-palavra");
let letraErrada= [];


desenhaTabuleiro()
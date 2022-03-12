let alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let palavras = ['ALURA', 'SISTEMA', 'FRONTEND', 'ONE', 'JAVA', 'BACKEND', 'APP']; 
let palavraSorteada;
let letrasDaPalavra;
let adicionarPalavra = document.getElementById('new-word');
let listaDinamica = [];
let erros = 6;
let letrasErradas = [];

desenhaTabuleiro();
sortearPalavra();
desenhaTeclado();

function desenhaTeclado() {
	for (let i = 0; i < alfabeto.length; i++) {
		let teclado = document.querySelector('#teclado');
		let teclas = document.createElement('button');
		teclas.id = 'tecla' + alfabeto[i];
		console.log(teclas.id);
		teclas.addEventListener('click', function() {letraEscolhida(alfabeto[i])});
		teclas.innerHTML = alfabeto[i];
		teclado.appendChild(teclas);
	}
}

adicionarPalavra.addEventListener("click", function(event){
	event.preventDefault();
	let palavraAdicionada = document.getElementById('input-new-word');
	let palavraNova = palavraAdicionada.value;
	palavras.push(palavraNova);
	if(palavraNova == 0){
		alert("Por favor, adicione uma palavra válida!")
	} else {
		alert(`A palavra ${palavraNova} foi adicionada com sucesso!`);
	}
  palavraAdicionada.value = '';
});

function sortearPalavra() {
	var sorteio = parseInt(Math.random() * palavras.length);
	palavraSorteada = palavras[sorteio];
	letrasDaPalavra = palavraSorteada.split('');	
  mostrarPalavra();
}

function mostrarPalavra() {
	const palavraTela = document.getElementById('palavra-secreta');
	palavraTela.innerHTML = '';
	
	for(i = 0; i < letrasDaPalavra.length; i++) {
		if(listaDinamica[i] == undefined){
			listaDinamica[i] = '&nbsp';
			palavraTela.innerHTML = `${palavraTela.innerHTML}<div class='layout-letras'>${listaDinamica[i]}</div>`;
		} else {
			palavraTela.innerHTML = `${palavraTela.innerHTML} <div class='layout-letras'> ${listaDinamica[i]} </div>`;
		}
	}
}

document.addEventListener('keyup', letraEscolhida);
	
function letraEscolhida(letra){
	if (typeof letra == 'string' && erros > 0) {
		mudarStyle("tecla" + letra) ;
		comparaLetra(letra);
		mostrarPalavra();
		
	} else if (typeof letra == 'object') {
		let evento = letra.key.toUpperCase();
		for (let i = 0; i < alfabeto.length; i++) {
			if (evento == alfabeto[i] && erros > 0) {
				comparaLetra(evento);
				mostrarPalavra();
			}
		}
	}
}

function mudarStyle(tecla){
	document.getElementById(tecla).style.color = '#e5e5e5';
	document.getElementById(tecla).style.background = '#e5e5e5';
}

function comparaLetra(letra){
	var letraErrada = document.querySelector(".letras-incorretas");
	var posicaoLetra = letrasDaPalavra.indexOf(letra);
	
  if(posicaoLetra < 0 && letrasErradas.indexOf(letra) == -1){
		letrasErradas.push(letra);
    erros--
    letraErrada.innerHTML = letraErrada.innerHTML + "<div class='letras-incorretas'>" + letra + "</div>"; 
    desenhaForca();
    if(erros == 0) {
      vocePerdeu();
    }
	} else {
		for(i = 0; i < letrasDaPalavra.length; i++){
			if (letrasDaPalavra[i] == letra) {
			listaDinamica[i] = letra;
			}
		}
	}

	let vitoria = true;
  for (i = 0; i < letrasDaPalavra.length; i++) {
    if (letrasDaPalavra[i] != listaDinamica[i]) {
      vitoria= false
    }
  }

	if(vitoria == true){
		erros = 0;
		voceGanhou();
	}
}

function desenhaForca()	{
	switch(erros){
		case 5:
			desenhaCabeça();
			break;
		case 4:
			desenhaCorpo();
			break;
		case 3:
			desenhaBraçoDireito();
			break;
		case 2:
			desenhaBraçoEsquerdo();
			break;
		case 1:
			desenhaPernaDireita();
			break;
		case 0: 
			desenhaPernaEsquerda();
			break;
		default:
			desenhaTabuleiro();
	}
}

function voceGanhou() {
	let resultado = document.querySelector("#result");
	resultado.innerHTML = "Parabéns, você venceu!";
	resultado.style.color = "green";
}

function vocePerdeu() {
	let resultado = document.querySelector("#result");
	resultado.innerHTML = `Você perdeu, a palavra é ${palavraSorteada}!`;
	resultado.style.color = "red";
}
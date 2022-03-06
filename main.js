let palavras = ['ALURA', 'SISTEMA', 'FRONTEND', 'ONE', 'JAVA', 'BACKEND', 'APP']; 
let palavraSorteada;
let letrasDaPalavra;
let adicionarPalavra = document.getElementById('new-word');
let listaDinamica = [];
let erros = 6;

desenhaTabuleiro();

sortearPalavra()

adicionarPalavra.addEventListener("click", function(event){
	event.preventDefault();
	var palavraAdicionada = document.getElementById('input-new-word');
	var palavraNova = palavraAdicionada.value;
	palavras.push(palavraNova);
	if(palavraNova == 0){
		alert("Por favor, adicione uma palavra válida!")
	} else {
		alert(`A palavra ${palavraNova} foi adicionada com sucesso!`);
    console.log(palavras)
	}
  palavraAdicionada.value = '';
});

function sortearPalavra() {
	var sorteio = parseInt(Math.random() * palavras.length);
	palavraSorteada = palavras[sorteio];
	letrasDaPalavra = palavraSorteada.split('');	
  mostrarPalavra();
}

console.log(palavras)

function mostrarPalavra() {
	const palavraTela = document.getElementById('palavra-secreta');
	palavraTela.innerHTML = '';

		for(i = 0; i < letrasDaPalavra.length; i++) {
			if(listaDinamica[i] == undefined){
				listaDinamica[i] = '&nbsp';
        console.log(listaDinamica[i])
        palavraTela.innerHTML = `${palavraTela.innerHTML}<div class='layout-letras'>${listaDinamica[i]}</div>`;
      } else {
			  palavraTela.innerHTML = `${palavraTela.innerHTML} <div class='layout-letras'> ${listaDinamica[i]} </div>`;
		}
	}
}


function mostrarPalavra() {
  
	const palavraTela = document.getElementById("palavra-secreta");
	palavraTela.innerHTML = "";

		for(i = 0; i < letrasDaPalavra.length; i++) {
			if(listaDinamica[i] == undefined){
				listaDinamica[i] = "&nbsp";
			  palavraTela.innerHTML = palavraTela.innerHTML + "<div class='layout-letras'>" + listaDinamica[i] + "</ div>"
		  } else{
        palavraTela.innerHTML = palavraTela.innerHTML + "<div class='layout-letras'>" + listaDinamica[i] + "</div>"
		}
	}
}

document.addEventListener('keyup', letraEscolhida);

function letraEscolhida(event){
  let letra = event.key.toUpperCase();
  if(erros > 0) {
  comparaLetra(letra);
  console.log(letra)
  mostrarPalavra(); 
  }
}

function comparaLetra(letra){
  console.log(letra)
	var letraErrada = document.querySelector(".letras-incorretas");
	var posicaoLetra = letrasDaPalavra.indexOf(letra)
	
		if(posicaoLetra < 0){
			erros--
			letraErrada.innerHTML = letraErrada.innerHTML + "<div class='letras-incorretas'>" + letra + "</div>"; 
		desenhaForca();
		if(erros == 0) {
			//vocePerdeu();
		}
	} else {
		for(i = 0; i < letrasDaPalavra.length; i++){
			if(letrasDaPalavra[i] == letra){
			listaDinamica[i] = letra;
			}
		}
	}
	var vitoria = true;
		for(i = 0; i < letrasDaPalavra.length; i++){
			if(letrasDaPalavra[i] != listaDinamica[i]){
			vitoria= false
		}
	}

	if(vitoria == true){
		erros = 0;
		//voceGanhou();
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
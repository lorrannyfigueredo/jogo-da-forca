function desenhaTabuleiro() {
  var tela = document.querySelector("canvas");
	var pincel = tela.getContext('2d') 
	pincel.lineWidth = 3;

	pincel.strokeStyle = '#0A3871'
	pincel.beginPath();
	pincel.moveTo(0, 200);
	pincel.lineTo(250, 200);
	pincel.lineTo(75, 200);
	pincel.lineTo(75, 5);
	pincel.lineTo(200, 5);
	pincel.lineTo(200, 38);
	pincel.stroke();
}

function desenhaCabeça() {
	var tela = document.querySelector("canvas");
	var pincel = tela.getContext('2d')
	pincel.lineWidth = 3;

	pincel.beginPath();
	pincel.arc(200, 50, 13, 0, 2 * 3.14);
	pincel.stroke();
}

function desenhaCorpo() {
	var tela = document.querySelector("canvas");
	var pincel = tela.getContext('2d')
	pincel.lineWidth = 3;

	pincel.beginPath();
	pincel.moveTo(200, 63);
	pincel.lineTo(200, 120);
	pincel.stroke();
}

function desenhaBraçoDireito() {
	var tela = document.querySelector("canvas");
	var pincel = tela.getContext('2d')
	pincel.lineWidth = 3;
	
	pincel.beginPath();
	pincel.moveTo(200, 75);
	pincel.lineTo(180, 95);
	pincel.stroke();
}

function desenhaBraçoEsquerdo() {
	var tela = document.querySelector("canvas");
	var pincel = tela.getContext('2d')
	pincel.lineWidth = 3;

	pincel.beginPath();
	pincel.moveTo(200, 75);
	pincel.lineTo(220, 95);
	pincel.stroke();
}

function desenhaPernaDireita() {
	var tela = document.querySelector("canvas");
	var pincel = tela.getContext('2d')
	pincel.lineWidth = 3;
	
	pincel.beginPath();
	pincel.moveTo(200, 120);
	pincel.lineTo(180, 148);
	pincel.stroke();
}

function desenhaPernaEsquerda() {
	var tela = document.querySelector("canvas");
	var pincel = tela.getContext('2d')
	pincel.lineWidth = 3;

	pincel.beginPath();
	pincel.moveTo(200, 120);
	pincel.lineTo(220, 148);
	pincel.stroke();
}
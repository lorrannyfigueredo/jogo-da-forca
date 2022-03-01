function desenhaTabuleiro() {
	//defineInputLetras();
  var tela = document.querySelector("canvas");
	var pincel = tela.getContext('2d') 

	pincel.fillStyle = "#F4A460";
	pincel.fillRect(150, 40, 30, 300);
	pincel.fillRect(180, 60, 200, 30);
  
	pincel.fillStyle = "#CD853F";
	pincel.fillRect(130, 340, 300, 10);
	pincel.fillRect(340, 90, 5, 40);
}

function desenhaCabeça() {
	var tela = document.querySelector("canvas");
	var pincel = tela.getContext('2d')
	pincel.fillStyle = "black";
	pincel.beginPath();
	pincel.arc(345, 150, 20, 0, 2 * 3.14);
	pincel.fill();
}	

function desenhaCorpo() {
	var tela = document.querySelector("canvas");
	var pincel = tela.getContext('2d')
	pincel.fillStyle = "black";
	pincel.fillRect(340, 168, 10, 80);
}

function desenhaBraçoDireito() {
	var tela = document.querySelector("canvas");
	var pincel = tela.getContext('2d')
	pincel.fillStyle = "black";
	pincel.beginPath();
	pincel.moveTo(341, 180);
	pincel.lineTo(300, 210);
	pincel.lineWidth = 5;
	pincel.stroke();
}

function desenhaBraçoEsquerdo() {
	var tela = document.querySelector("canvas");
	var pincel = tela.getContext('2d')
	pincel.fillStyle = "black";
	pincel.beginPath();
	pincel.moveTo(349, 180);
	pincel.lineTo(391, 210);
	pincel.stroke();
}

function desenhaPernaDireita() {
	var tela = document.querySelector("canvas");
	var pincel = tela.getContext('2d')
	pincel.fillStyle = "black";
	pincel.beginPath();
	pincel.moveTo(341, 242);
	pincel.lineTo(300, 290);
	pincel.stroke();
}

function desenhaPernaEsquerda() {
	var tela = document.querySelector("canvas");
	var pincel = tela.getContext('2d')
	pincel.fillStyle = "black";
	pincel.beginPath();
	pincel.moveTo(349, 242);
	pincel.lineTo(391, 290);
	pincel.stroke();
}
var askMe = document.querySelector("#txtPregunta");
var pen = document.querySelector(".circle");
var projects = document.querySelector("#projectsPlace");
var subMenu = document.querySelector(".rotate ul");
var about = document.querySelector("#about");
var btnAway = document.querySelector("#btnAway");
var indiceBtn = document.querySelector(".indiceBtn");
var circle = document.querySelector(".circle");
var canvas = document.querySelector('#myCanvas');
var trabajos = document.querySelector('#trabajos');
var reading1 = document.querySelector('#reading1');
var divMenu = document.querySelector('#divMenu');
var img1 = document.querySelector('#img1');
var txt1 = document.querySelector('#texto1');
var flecha = document.querySelector('.flecha');
var imagenDiv = document.querySelector('#imagenDiv');
var lsIndice = document.querySelector('#lsIndice');
var cerrar = document.querySelector('.cerrar');

askMe.style.opacity="0";
askMe.style.transform="translateX(100%)";


pen.addEventListener("mouseover", display, false);
pen.addEventListener("mouseout", displayFalse);
projects.addEventListener('click', proyectos);
flecha.addEventListener('click', imagenes);
indiceBtn.addEventListener('click', listaTrabajos);
cerrar.addEventListener('click', cerrado);

var id;
var show = 0;

function display () {
	askMe.style.transition="3s";
	askMe.style.transform="translateX(1rem)";
	askMe.style.opacity="1";
	var ola2 = 100;
	var ejem = false;
	
	id = setInterval(background, 10);
	function background(){
	
		if (ola2 >= 18 && ejem === false && ola2 <= 99){
			ola2++;
		}
		else if(ola2 >= 99){
			ejem = true;
			ola2--
		}
		else if (ejem === true && ola2 >= 19){
			ola2--
		}
		else if (ejem === true && ola2 < 19){
			ejem = false;
		}


		circle.style.background= 'linear-gradient(45deg, rgba(136,100,221,1) 0%,rgba(120,145,213,1)'+ola2+'%)';
	}

	}

function displayFalse(){
	askMe.style.transition="3s";
	askMe.style.transform="translateX(100%)";
	askMe.style.opacity="0";
	//circle.style.background= 'linear-gradient(45deg, rgba(136,100,221,1) 0%,rgba(120,145,213,1)100%)'
	clearInterval(id);
}


function proyectos (e){
	e.preventDefault();
	subMenu.style.transition= "3s";
	subMenu.style.transform= "rotate(-90deg) translate(25%)";
	contact.style.transition= '3s';
	indiceBtn.style.transition = '3s';
	indiceBtn.style.transform = 'translateY(0%)';
	myCanvas.style.opacity = '0.09';
	myCanvas.style.transition = '2s';

	let pos = 0;
	let num = 0;
	var id = setInterval(gridX, 30);
	function gridX(){
		if (pos == 30){
			clearInterval(id);
			btnAway.style.display = 'none';
		}
		else {
			num += 0.05;
			num2 = 1-num;
			pos++;
			btnAway.style.position = 'relative';
			btnAway.style.bottom = pos + 'rem';
			btnAway.style.opacity = num2;
			projects.style.position = 'relative';
			projects.style.opacity = num2-0.2;
			projects.style.top = pos + 'rem';

		}
	}
	setTimeout(function(){
		divMenu.style.display = 'none';
		trabajos.style.display = 'flex';
	}, 1000);

	setTimeout(function(){
		img1.style.opacity = '1';
		img1.style.transition = '2s ease-out';
		txt1.style.opacity = '1';
		txt1.style.transition = '2s ease-out';
	}, 1100);
}

function imagenes(){
	show++;
	if (show === 1){
		imagenDiv.innerHTML = "<img src='./img/readingkingdom_two.png'>";
		show = -1;
	}
	else if (show === 0){
		imagenDiv.innerHTML = "<img src='./img/readingkingdom_cover.png'>";
	}
}

function listaTrabajos(){
	lsIndice.style.transform = 'translateY(0)';
	lsIndice.style.transition = '2s ease-out';
	console.log('hola');
}

function cerrado(){
	lsIndice.style.transform = 'translateY(146%)';
	lsIndice.style.transition = '2s ease-out';
	indiceBtn.style.transform = 'translateY(-200%)';
}
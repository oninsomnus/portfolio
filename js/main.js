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
var project1 = document.querySelector('#project1');
var project2 = document.querySelector('#project2');
var project3 = document.querySelector('#project3');
var project4 = document.querySelector('#project4');
var project5 = document.querySelector('#project5');
var project6 = document.querySelector('#project6');
var project7 = document.querySelector('#project7');
var project8 = document.querySelector('#project8');
var primer = true;
askMe.style.opacity="0";
askMe.style.transform="translateX(100%)";


addEventListener('wheel', scroll);
pen.addEventListener("mouseover", display, false);
pen.addEventListener("mouseout", displayFalse);
projects.addEventListener('click', proyectos);
flecha.addEventListener('click', imagenes);
indiceBtn.addEventListener('click', listaTrabajos);
cerrar.addEventListener('click', cerrado);

project1.addEventListener('mouseover', project1hover);
project1.addEventListener('mouseout', project1out);
project1.addEventListener('click', agt);

project2.addEventListener('mouseover', project2hover);
project2.addEventListener('mouseout', project2out);
project2.addEventListener('click', readingK);

project3.addEventListener('mouseover', project3hover);
project3.addEventListener('mouseout', project3out);
project3.addEventListener('click', tropicoLab);

project4.addEventListener('mouseover', project4hover);
project4.addEventListener('mouseout', project4out);
project4.addEventListener('click', tropicoLab);

project5.addEventListener('mouseover', project5hover);
project5.addEventListener('mouseout', project5out);
project5.addEventListener('click', tropicoLab);

project6.addEventListener('mouseover', project6hover);
project6.addEventListener('mouseout', project6out);
project6.addEventListener('click', tropicoLab);

project7.addEventListener('mouseover', project7hover);
project7.addEventListener('mouseout', project7out);
project7.addEventListener('click', tropicoLab);

project8.addEventListener('mouseover', project8hover);
project8.addEventListener('mouseout', project8out);
project8.addEventListener('click', tropicoLab);

var id;
var show = 0;
var momento = 0;
var seccion = 1;

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
	imagenDiv.style.opacity = '1';
	imagenDiv.style.transition = '3s';
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
	secciones();
}

function imagenes(){
	show++;
	if (seccion === 1){
		if (show === 1){
			imagenDiv.innerHTML = "<img src='./img/readingkingdom_two.png'>";
			show = -1;
		}
		else if (show === 0){
			imagenDiv.innerHTML = "<img src='./img/readingkingdom_cover.png'>";
		}
	}

	if (seccion === 2){
		if (show === 1){
			imagenDiv.innerHTML = "<img src='./img/random-01.png'>";
			show = -1;
		}
		else if (show === 0){
			imagenDiv.innerHTML = "<img src='./img/random-02.png'>";
		}
	}
}

function listaTrabajos(){
	lsIndice.style.transform = 'translateY(0)';
	lsIndice.style.transition = '2s ease-out';
	indiceBtn.style.opacity = '0';
	indiceBtn.style.transition = '1s';
	indiceBtn.style.transform = 'translateY(-100%)';
}

function cerrado(){
	lsIndice.style.transform = 'translateY(146%)';
	lsIndice.style.transition = '2s ease-out';
	indiceBtn.style.opacity = '1';
	indiceBtn.style.transition = '4s';
	indiceBtn.style.transform = 'translateY(0%)';
}


function agt(){
	seccion = 1;
	secciones();
}

function readingK(){
	seccion = 2;
	secciones();
}

function tropicoLab(){
	seccion = 3;
	secciones();
}

function scroll(e){
	if (e.deltaY > 0){
		momento++;

		if(momento === 2){
			imagenDiv.style.transition = '0.3s'
			imagenDiv.style.opacity = '0';
			setTimeout(function(){
				seccion++;
				secciones();
				console.log('seccion :'+seccion);
				momento = 0;
			}, 300);
			if (seccion >= 3){
				seccion = 3;
			}
		}
	}

	else if (e.deltaY < 0){
		momento--;

		if (momento === -3){
			imagenDiv.style.transition = '0.3s'
			imagenDiv.style.opacity = '0';
			setTimeout(function(){
				
				seccion--;
				secciones();
				console.log('seccion :'+seccion);
				momento = 0;
			}, 300);
		}
		if (seccion <= 2){
			seccion = 2;
		}
	}
}

function secciones(){
	console.log(primer)
	if (primer === true){
	primer = false;
		setTimeout(function(){
		divMenu.style.display = 'none';
		trabajos.style.display = 'flex';
		imagenDiv.innerHTML = "<img src='./img/readingkingdom_cover.png'>";
		imagenDiv.style.opacity = '0';
	}, 1000);

	setTimeout(function(){
		imagenDiv.style.opacity = '1';
		imagenDiv.style.transition = '1s ease-out';
		txt1.style.opacity = '1';
		txt1.style.transition = '2s ease-out';
	}, 2000);}
else if (primer === false){
	if (seccion === 1){
		imagenDiv.style.opacity = '1';
		imagenDiv.style.transition = '3s ease-out';
		imagenDiv.innerHTML = "<img src='./img/readingkingdom_cover.png'>";
		project1.style.backgroundSize = '100% 100%';
		project1.style.opacity = '1';
		project1.style.transition = 'all 1s';
		project2.style.backgroundSize = '0% 100%';
		project2.style.opacity = '0.4';
			
		show = 0;
	}

	else if (seccion === 2){
		imagenDiv.style.opacity = '1';
		imagenDiv.style.transition = '3s ease-out';
		imagenDiv.innerHTML = "<img src='./img/random-01.png'>";
		project1.style.backgroundSize = '0% 100%';
		project1.style.opacity = '0.4';
		project3.style.backgroundSize = '0% 100%';
		project3.style.opacity = '0.4';
		project2.style.backgroundSize = '100% 100%';
		project2.style.opacity = '1';
		project2.style.transition = 'all 1s';
		show = -1;
	}

	else if (seccion === 3){
		imagenDiv.style.opacity = '1';
		imagenDiv.style.transition = '3s ease-out';
		imagenDiv.innerHTML = "<img src='./img/random-02.png'>";
		project1.style.backgroundSize = '0% 100%';
		project1.style.opacity = '0.4';
		project2.style.backgroundSize = '0% 100%';
		project2.style.opacity = '0.4';
		project2.style.transition = 'all 1s';
		project3.style.backgroundSize = '100% 100%';
		project3.style.opacity = '1';
		project3.style.transition = 'all 1s';
		console.log('hola, soy la seccion 3 de la funcion secciones')
		show = -1;
	}

	else if (seccion === 4){
		imagenDiv.innerHTML = "<img src='./img/random-03.png'>";
		console.log('hola, soy la seccion 4 de la funcion secciones')
		show = -1;
	}

	else if (seccion === 5){
		imagenDiv.innerHTML = "<img src='./img/random-04.png'>";		
	}

	else if (seccion === 6){
		imagenDiv.innerHTML = "<img src='./img/001.png'>";
	}

	else if (seccion === 7){
		imagenDiv.innerHTML = "<img src='./img/random-01.png'>";
	}

	else if (seccion === 8){
		imagenDiv.innerHTML = "<img src='./img/readingkingdom_two.png'>";		
	}
	}
}









function project1hover(){ 
	project1.style.backgroundSize = '100% 100%';
	project1.style.opacity = '1';
}

function project1out(){ 
	if (seccion === 1){

	}
	else {
		project1.style.transition = 'all 1s';
		project1.style.backgroundSize = '0% 100%';
		project1.style.opacity = '0.4';
	}
}

function project2hover(){ 
	project2.style.backgroundSize = '100% 100%';
	project2.style.opacity = '1';
}

function project2out(){
	if (seccion === 2){

	} 
	else {
		project2.style.transition = 'all 1s';
		project2.style.backgroundSize = '0% 100%';
		project2.style.opacity = '0.4';
	}
}

function project3hover(){ 
	project3.style.backgroundSize = '100% 100%';
	project3.style.opacity = '1';
}

function project3out(){
	if (seccion === 3){

	} 
	else {
		project3.style.transition = 'all 1s';
		project3.style.backgroundSize = '0% 100%';
		project3.style.opacity = '0.4';
	}
}

function project4hover(){ 
	project4.style.backgroundSize = '100% 100%';
	project4.style.opacity = '1';
}

function project4out(){
	if (seccion === 4){

	} 
	else {
		project4.style.transition = 'all 1s';
		project4.style.backgroundSize = '0% 100%';
		project4.style.opacity = '0.4';
	}
}

function project5hover(){ 
	project5.style.backgroundSize = '100% 100%';
	project5.style.opacity = '1';
}

function project5out(){
	if (seccion === 5){

	} 
	else {
		project5.style.transition = 'all 1s';
		project5.style.backgroundSize = '0% 100%';
		project5.style.opacity = '0.4';
	}
}

function project6hover(){ 
	project6.style.backgroundSize = '100% 100%';
	project6.style.opacity = '1';
}

function project6out(){
	if (seccion === 6){

	} 
	else {
		project6.style.transition = 'all 1s';
		project6.style.backgroundSize = '0% 100%';
		project6.style.opacity = '0.4';
	}
}

function project7hover(){ 
	project7.style.backgroundSize = '100% 100%';
	project7.style.opacity = '1';
}

function project7out(){
	if (seccion === 7){

	} 
	else {
		project7.style.transition = 'all 1s';
		project7.style.backgroundSize = '0% 100%';
		project7.style.opacity = '0.4';
	}
}

function project8hover(){ 
	project8.style.backgroundSize = '100% 100%';
	project8.style.opacity = '1';
}

function project8out(){
	if (seccion === 8){

	} 
	else {
		project8.style.transition = 'all 1s';
		project8.style.backgroundSize = '0% 100%';
		project8.style.opacity = '0.4';
	}
}
var askMe = document.querySelector("#txtPregunta");
var pen = document.querySelector(".circle");
var projects = document.querySelector("#projectsPlace");
var subMenu = document.querySelector(".rotate ul");
var about = document.querySelector("#about");
var contact = document.querySelector('#contact');
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
var tituloProj = document.querySelector('#tituloProj')
var subtitutloProj = document.querySelector('#subtitutloProj')
var textoProj = document.querySelector('#textoProj')
var outPlace = document.querySelector('.posicionDiv')
var sideabout = document.querySelector('#sideabout');
var sidecontact = document.querySelector('#sidecontact');
var sideprojects = document.querySelector('#sideprojects');
var txtabout = document.querySelector('#txtabout');
var losproyectos = document.querySelector('.losProyectos');
var divcontact = document.querySelector('#divcontact');
var primer = true;

askMe.style.opacity="0";
askMe.style.transform="translateX(100%)";




addEventListener('wheel', scroll);
outPlace.addEventListener('click', cerrado);
pen.addEventListener("mouseover", display, false);
pen.addEventListener("mouseout", displayFalse);
pen.addEventListener('click', clickContacto);
projects.addEventListener('click', proyectos);
flecha.addEventListener('click', imagenes);
indiceBtn.addEventListener('click', listaTrabajos);
cerrar.addEventListener('click', cerrado);
about.addEventListener('click', clickAbout);
contact.addEventListener('click', clickContacto);
sideabout.addEventListener('click', clickAbout);
sidecontact.addEventListener('click', clickContacto);
sideprojects.addEventListener('click', proyectos);

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
project4.addEventListener('click', xerode);

project5.addEventListener('mouseover', project5hover);
project5.addEventListener('mouseout', project5out);
project5.addEventListener('click', yform);

project6.addEventListener('mouseover', project6hover);
project6.addEventListener('mouseout', project6out);
project6.addEventListener('click', cywclub);

project7.addEventListener('mouseover', project7hover);
project7.addEventListener('mouseout', project7out);
project7.addEventListener('click', flyers);

project8.addEventListener('mouseover', project8hover);
project8.addEventListener('mouseout', project8out);
project8.addEventListener('click', misc);

var id;
var show = 0;
var momento = 0;
var seccion = 1;
var cerrar = false;

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
	cerrar = true;
	imagenDiv.style.opacity = '1';
	imagenDiv.style.transition = '3s';
	subMenu.style.transition= "3s";
	subMenu.style.transform= "rotate(-90deg) translate(25%)";
	contact.style.transition= '3s';
	indiceBtn.style.transition = '3s';
	indiceBtn.style.transform = 'translateY(0%)';
	myCanvas.style.opacity = '0.09';
	myCanvas.style.transition = '2s';
	sideprojects.style.display = 'none';
	sideabout.style.display = 'inline-block';
	sidecontact.style.display = 'inline-block';
	losproyectos.style.display = 'inline-block';
	txtabout.style.display = 'none';
	divcontact.style.display = 'none';
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

function clickAbout(e){
	e.preventDefault();
	subMenu.style.transition= "3s";
	subMenu.style.transform= "rotate(-90deg) translate(25%)";
	sideabout.style.display = 'none';
	sideprojects.style.display = 'inline-block';
	sidecontact.style.display = 'inline-block';
	txtabout.style.display = 'inline-block';
	divMenu.style.display = 'none';
	losproyectos.style.display = 'none';
	myCanvas.style.opacity = '0.09';
	myCanvas.style.transition = '2s';
	divcontact.style.display = 'none';
	indiceBtn.style.transform = 'translateY(200%)';
	let pos = 0;
	let num = 0;
	var id = setInterval(gridX, 30);
	function gridX(){
		if (pos == 30){
			clearInterval(id);
			btnAway.style.display = 'none';
			txtabout.style.opacity = '1';
			txtabout.style.transition = '2s';
			txtabout.style.overflowY = 'scroll';
    			txtabout.style.height = '450px';
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
}

function clickContacto(e){
	e.preventDefault();
	subMenu.style.transition= "3s";
	subMenu.style.transform= "rotate(-90deg) translate(25%)";
	sidecontact.style.display = 'none';
	sideprojects.style.display = 'inline-block';
	sideabout.style.display = 'inline-block';
	divcontact.style.display = 'flex';
	divMenu.style.display = 'none';
	losproyectos.style.display = 'none';
	myCanvas.style.opacity = '0.09';
	myCanvas.style.transition = '2s';
	txtabout.style.display = 'none';
	indiceBtn.style.transform = 'translateY(200%)'
	let pos = 0;
	let num = 0;
	var id = setInterval(gridX, 30);
	function gridX(){
		if (pos == 30){
			clearInterval(id);
			btnAway.style.display = 'none';
			divcontact.style.opacity = '1';
			divcontact.style.transition = '2s';
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
}

function imagenes(){
	show++;
	if (seccion === 1){
		if (show === 1){
			imagenDiv.innerHTML = "<img src='./img/agt.gif'>";
			show = +1;
		}
		else if (show === 0){
			imagenDiv.innerHTML = "<img src='./img/agtlo.png'>";
		}

		else if (show === 2){
			imagenDiv.innerHTML = "<img src='./img/agt1.png'>";
			show+1;
		}

		else if (show === 3){
			imagenDiv.innerHTML = "<img src='./img/agt2.png'>";
			show+1;
		}

		else if (show === 4){
			imagenDiv.innerHTML = "<img src='./img/agt3.png'>";
			show+1;
		}

		else if (show === 5){
			imagenDiv.innerHTML = "<img src='./img/agt5.png'>";
			show+1;
		}

		else if (show === 6){
			imagenDiv.innerHTML = "<img src='./img/agt6.png'>";
			show+1;
		}

		else if (show === 7){
			imagenDiv.innerHTML = "<img src='./img/agt7.png'>";
			show+1;
		}

		else if (show === 8){
			imagenDiv.innerHTML = "<img src='./img/agt8.png'>";
			show = -1;
		}
	}

	if (seccion === 2){
		if (show === 1){
			imagenDiv.innerHTML = "<img src='./img/readingkingdom_two.png'>";
			show = -1;
		}
		else if (show === 0){
			imagenDiv.innerHTML = "<img src='./img/readingkingdom_cover.png'>";
		}
	}

	if (seccion === 3){
		if (show === 1){
			imagenDiv.innerHTML = "<img src='./img/tropi2.png'>";
			show = +1;
		}
		else if (show === 0){
			imagenDiv.innerHTML = "<img src='./img/tropi1.png'>";
		}

		else if (show === 2){
			imagenDiv.innerHTML = "<img src='./img/tropi3.png'>";
			show+1;
		}

		else if (show === 3){
			imagenDiv.innerHTML = "<img src='./img/tropi4.png'>";
			show = -1;
		}
	}

	if (seccion === 4){
		if (show === 1){
			imagenDiv.innerHTML = "<img src='./img/xerode-03.png'>";
			show = -1;
		}
		else if (show === 0){
			imagenDiv.innerHTML = "<img src='./img/xerode-02.png'>";
		}
	}

	if (seccion === 5){
		if (show === 1){
			imagenDiv.innerHTML = "<img src='./img/yform2.png'>";
			show = +1;
		}
		else if (show === 0){
			imagenDiv.innerHTML = "<img src='./img/yform1.png'>";
		}

		else if (show === 2){
			imagenDiv.innerHTML = "<img src='./img/yform3.png'>";
			show+1;
		}

		else if (show === 3){
			imagenDiv.innerHTML = "<img src='./img/yform4.png'>";
			show = -1;
		}
	}

	if (seccion === 6){
		if (show === 1){
			imagenDiv.innerHTML = "<img src='./img/works-03.png'>";
			show = +1;
		}
		else if (show === 0){
			imagenDiv.innerHTML = "<img src='./img/works-06.png'>";
		}

		else if (show === 2){
			imagenDiv.innerHTML = "<img src='./img/works-02.png'>";
			show+1;
		}

		else if (show === 3){
			imagenDiv.innerHTML = "<img src='./img/works-10.png'>";
			show = -1;
		}
	}

	if (seccion === 7){
		console.log(show);
		if (show === 1){
			imagenDiv.innerHTML = "<img src='./img/works-01.png'>";
			tituloProj.innerHTML = titulosh1[8];
			textoProj.innerHTML = textosp[7];
			show+1;
		}
		else if (show === 0){
			imagenDiv.innerHTML = "<img src='./img/fly-15.png'>";
			tituloProj.innerHTML = titulosh1[11];
			textoProj.innerHTML = textosp[11];
		}
		else if (show === 2){
			imagenDiv.innerHTML = "<img src='./img/works-05.png'>";
			tituloProj.innerHTML = titulosh1[6];
			textoProj.innerHTML = textosp[6];
			show+1;
		}
		else if (show === 3){
			imagenDiv.innerHTML = "<img src='./img/fly-14.png'>";
			tituloProj.innerHTML = titulosh1[12];
			textoProj.innerHTML = textosp[12];
			show = -1;
		}
	}

	if (seccion === 8){
		if (show === 1){
			imagenDiv.innerHTML = "<img src='./img/works-09.png'>";
			tituloProj.innerHTML = titulosh1[7];
			subtitutloProj.innerHTML = subtitulosh3[4];
			textoProj.innerHTML = textosp[8];
			show = +1;
		}
		else if (show === 0){
			imagenDiv.innerHTML = "<img src='./img/works-08.png'>";
			tituloProj.innerHTML = titulosh1[7];
			subtitutloProj.innerHTML = subtitulosh3[4];
			textoProj.innerHTML = textosp[8];
		}

		else if (show === 2){
			imagenDiv.innerHTML = "<img src='./img/works-04.png'>";
			tituloProj.innerHTML = titulosh1[9];
			subtitutloProj.innerHTML = subtitulosh3[5];
			textoProj.innerHTML = textosp[9];
			show+1;
		}

		else if (show === 3){
			imagenDiv.innerHTML = "<img src='./img/works-07.png'>";
			tituloProj.innerHTML = titulosh1[9];
			subtitutloProj.innerHTML = subtitulosh3[5];
			textoProj.innerHTML = textosp[9];
			show+1;
		}

		else if (show === 4){
			imagenDiv.innerHTML = "<img src='./img/works-15.png'>";
			tituloProj.innerHTML = titulosh1[10];
			subtitutloProj.innerHTML = subtitulosh3[4];
			textoProj.innerHTML = textosp[10];
			show+1;
		}

		else if (show === 5){
			imagenDiv.innerHTML = "<img src='./img/works-16.png'>";
			tituloProj.innerHTML = titulosh1[10];
			subtitutloProj.innerHTML = subtitulosh3[4];
			textoProj.innerHTML = textosp[10];
			show = -1;
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
	if (cerrar == true){
		lsIndice.style.transform = 'translateY(146%)';
		lsIndice.style.transition = '2s ease-out';
		indiceBtn.style.opacity = '1';
		indiceBtn.style.transition = '4s';
		indiceBtn.style.transform = 'translateY(0%)';
	}
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

function xerode(){
	seccion = 4;
	secciones();
}

function yform(){
	seccion = 5;
	secciones();
}

function cywclub(){
	seccion = 6;
	secciones();
}

function flyers(){
	seccion = 7;
	secciones();
}

function misc(){
	seccion = 8;
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
				momento = 0;
			}, 300);
			if (seccion >= 8){
				seccion = 0;
			}
		}
	}

	else if (e.deltaY < 0){
		momento--;

		if (momento === -7){
			imagenDiv.style.transition = '0.3s'
			imagenDiv.style.opacity = '0';
			setTimeout(function(){
				
				seccion--;
				secciones();
				momento = 0;
			}, 300);
		}
		if (seccion <= 2){
			seccion = 2;
		}
	}
}

function secciones(){
	if (primer === true){

	primer = false;
		setTimeout(function(){
		divMenu.style.display = 'none';
		trabajos.style.display = 'flex';
		imagenDiv.innerHTML = "<img src='./img/agtlo.png'>";
		imagenDiv.style.opacity = '0';
		project1.style.backgroundSize = '100% 100%';
		project1.style.opacity = '1';
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
		imagenDiv.innerHTML = "<img src='./img/agtlo.png'>";
		project1.style.backgroundSize = '100% 100%';
		project1.style.opacity = '1';
		project1.style.transition = 'all 1s';
		project2.style.backgroundSize = '0% 100%';
		project2.style.opacity = '0.4';
		project3.style.backgroundSize = '0% 100%';
		project3.style.opacity = '0.4';
		project4.style.backgroundSize = '0% 100%';
		project4.style.opacity = '0.4';
		project5.style.backgroundSize = '0% 100%';
		project5.style.opacity = '0.4';
		project6.style.backgroundSize = '0% 100%';
		project6.style.opacity = '0.4';
		project7.style.backgroundSize = '0% 100%';
		project7.style.opacity = '0.4';
		project8.style.backgroundSize = '0% 100%';
		project8.style.opacity = '0.4';
		tituloProj.innerHTML = titulosh1[0];
		subtitutloProj.innerHTML = subtitulosh3[1];
		textoProj.innerHTML = textosp[0];

			
		show = 0;
	}

	else if (seccion === 2){
		imagenDiv.style.opacity = '1';
		imagenDiv.style.transition = '3s ease-out';
		imagenDiv.innerHTML = "<img src='./img/readingkingdom_cover.png'>";
		project1.style.backgroundSize = '0% 100%';
		project1.style.opacity = '0.4';
		project3.style.backgroundSize = '0% 100%';
		project3.style.opacity = '0.4';
		project2.style.backgroundSize = '100% 100%';
		project2.style.opacity = '1';
		project2.style.transition = 'all 1s';
		project4.style.backgroundSize = '0% 100%';
		project4.style.opacity = '0.4';
		project5.style.backgroundSize = '0% 100%';
		project5.style.opacity = '0.4';
		project6.style.backgroundSize = '0% 100%';
		project6.style.opacity = '0.4';
		project7.style.backgroundSize = '0% 100%';
		project7.style.opacity = '0.4';
		project8.style.backgroundSize = '0% 100%';
		project8.style.opacity = '0.4';
		tituloProj.innerHTML = titulosh1[1];
		subtitutloProj.innerHTML = subtitulosh3[0];
		textoProj.innerHTML = textosp[1];
		show = -1;
	}

	else if (seccion === 3){
		imagenDiv.style.opacity = '1';
		imagenDiv.style.transition = '3s ease-out';
		imagenDiv.innerHTML = "<img src='./img/tropi1.png'>";
		project1.style.backgroundSize = '0% 100%';
		project1.style.opacity = '0.4';
		project2.style.backgroundSize = '0% 100%';
		project2.style.opacity = '0.4';
		project3.style.backgroundSize = '100% 100%';
		project3.style.opacity = '1';
		project3.style.transition = 'all 1s';
		project4.style.backgroundSize = '0% 100%';
		project4.style.opacity = '0.4';
		project5.style.backgroundSize = '0% 100%';
		project5.style.opacity = '0.4';
		project6.style.backgroundSize = '0% 100%';
		project6.style.opacity = '0.4';
		project7.style.backgroundSize = '0% 100%';
		project7.style.opacity = '0.4';
		project8.style.backgroundSize = '0% 100%';
		project8.style.opacity = '0.4';
		tituloProj.innerHTML = titulosh1[2];
		subtitutloProj.innerHTML = subtitulosh3[2];
		textoProj.innerHTML = textosp[2];
		show = -1;
	}

	else if (seccion === 4){
		imagenDiv.style.opacity = '1';
		imagenDiv.style.transition = '3s ease-out';
		imagenDiv.innerHTML = "<img src='./img/xerode-02.png'>";
		project1.style.backgroundSize = '0% 100%';
		project1.style.opacity = '0.4';
		project2.style.backgroundSize = '0% 100%';
		project2.style.opacity = '0.4';
		project3.style.backgroundSize = '0% 100%';
		project3.style.opacity = '0.4';
		project3.style.transition = 'all 1s';
		project4.style.backgroundSize = '100% 100%';
		project4.style.opacity = '1';
		project4.style.transition = 'all 1s';
		project5.style.backgroundSize = '0% 100%';
		project5.style.opacity = '0.4';
		project6.style.backgroundSize = '0% 100%';
		project6.style.opacity = '0.4';
		project7.style.backgroundSize = '0% 100%';
		project7.style.opacity = '0.4';
		project8.style.backgroundSize = '0% 100%';
		project8.style.opacity = '0.4';
		tituloProj.innerHTML = titulosh1[3];
		subtitutloProj.innerHTML = subtitulosh3[2];
		textoProj.innerHTML = textosp[3];
		show = -1;
	}

	else if (seccion === 5){
		imagenDiv.style.opacity = '1';
		imagenDiv.style.transition = '3s ease-out';
		project1.style.backgroundSize = '0% 100%';
		project1.style.opacity = '0.4';
		project2.style.backgroundSize = '0% 100%';
		project3.style.backgroundSize = '0% 100%';
		project3.style.opacity = '0.4';
		project4.style.backgroundSize = '0% 100%';
		project4.style.opacity = '0.4';
		project4.style.transition = 'all 1s';
		project5.style.backgroundSize = '100% 100%';
		project5.style.opacity = '1';
		project5.style.transition = 'all 1s';
		project6.style.backgroundSize = '0% 100%';
		project6.style.opacity = '0.4';
		project7.style.backgroundSize = '0% 100%';
		project7.style.opacity = '0.4';
		project8.style.backgroundSize = '0% 100%';
		project8.style.opacity = '0.4';
		imagenDiv.innerHTML = "<img src='./img/yform1.png'>";
		tituloProj.innerHTML = titulosh1[4];
		subtitutloProj.innerHTML = subtitulosh3[2];
		textoProj.innerHTML = textosp[4];
		show = -1;		
	}

	else if (seccion === 6){
		imagenDiv.style.opacity = '1';
		imagenDiv.style.transition = '3s ease-out';
		project1.style.backgroundSize = '0% 100%';
		project1.style.opacity = '0.4';
		project2.style.backgroundSize = '0% 100%';
		project2.style.opacity = '0.4';
		project3.style.backgroundSize = '0% 100%';
		project3.style.opacity = '0.4';
		project4.style.backgroundSize = '0% 100%';
		project4.style.opacity = '0.4';
		project5.style.backgroundSize = '0% 100%';
		project5.style.opacity = '0.4';
		project5.style.transition = 'all 1s';
		project6.style.backgroundSize = '100% 100%';
		project6.style.opacity = '1';
		project6.style.transition = 'all 1s';
		project7.style.backgroundSize = '0% 100%';
		project7.style.opacity = '0.4';
		project8.style.backgroundSize = '0% 100%';
		project8.style.opacity = '0.4';
		imagenDiv.innerHTML = "<img src='./img/works-06.png'>";
		tituloProj.innerHTML = titulosh1[5];
		subtitutloProj.innerHTML = subtitulosh3[3];
		textoProj.innerHTML = textosp[5];
		show = -1;
	}

	else if (seccion === 7){
		imagenDiv.style.opacity = '1';
		imagenDiv.style.transition = '3s ease-out';
		project1.style.backgroundSize = '0% 100%';
		project1.style.opacity = '0.4';
		project2.style.backgroundSize = '0% 100%';
		project2.style.opacity = '0.4';
		project3.style.backgroundSize = '0% 100%';
		project3.style.opacity = '0.4';
		project4.style.backgroundSize = '0% 100%';
		project4.style.opacity = '0.4';
		project5.style.backgroundSize = '0% 100%';
		project5.style.opacity = '0.4';
		project6.style.backgroundSize = '0% 100%';
		project6.style.opacity = '0.4';
		project6.style.transition = 'all 1s';
		project7.style.backgroundSize = '100% 100%';
		project7.style.opacity = '1';
		project7.style.transition = 'all 1s';
		project8.style.backgroundSize = '0% 100%';
		project8.style.opacity = '0.4';
		imagenDiv.innerHTML = "<img src='./img/fly-15.png'>";
		tituloProj.innerHTML = titulosh1[11];
		subtitutloProj.innerHTML = subtitulosh3[3];
		textoProj.innerHTML = textosp[11];
		show = -1;
	}

	else if (seccion === 8){
		imagenDiv.style.opacity = '1';
		imagenDiv.style.transition = '3s ease-out';
		project1.style.backgroundSize = '0% 100%';
		project1.style.opacity = '0.4';
		project2.style.backgroundSize = '0% 100%';
		project2.style.opacity = '0.4';
		project3.style.backgroundSize = '0% 100%';
		project3.style.opacity = '0.4';
		project4.style.backgroundSize = '0% 100%';
		project4.style.opacity = '0.4';
		project5.style.backgroundSize = '0% 100%';
		project5.style.opacity = '0.4';
		project6.style.backgroundSize = '0% 100%';
		project6.style.opacity = '0.4';
		project7.style.backgroundSize = '0% 100%';
		project7.style.opacity = '0.4';
		project7.style.transition = 'all 1s';
		project8.style.backgroundSize = '100% 100%';
		project8.style.opacity = '1';
		project8.style.transition = 'all 1s';
		imagenDiv.innerHTML = "<img src='./img/works-08.png'>";
		tituloProj.innerHTML = titulosh1[7];
		subtitutloProj.innerHTML = subtitulosh3[4];
		textoProj.innerHTML = textosp[8];
		show = -1;		
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


var titulosh1 = ['AGT', 'Reading Kingdom', 'TropicoLab', 'Xerode Video Converter', 'Yummy Club Form', 'Chelsea Young Writers', 'Citas Médicas', 'Teaching Spanish', 'Green Zone', 'Introspección', 'Infinity Trader', 'SeedTrust', 'Gym Rox Fitness'];
var subtitulosh3 = ['Editorial Design', 'UI/UX Design | Visual Identity', 'UI Design', 'Print Design', 'Stationary', 'Digital Design'];
var textosp = [
'AGT: Acción, Gestión y Transformación, is a Venezuelan based company that makes management for residential properties. Their services include accounting, administration, gardening, cleaning. For this project I designed their visual identity and website, focusing in the enviroment that surrounds the company, which was an important detail to develop in the color palette, since is located in a island in the caribbean sea.',
'Reading Kingdom: is a very educative and unique online program that teach students to write and read in English. I was asked to develop an editorial design which explains the benefits of using Reading Kingdom.',
'Tropicolab is a blog from a Venezuelan architect. Her project was to create a space where people could publish essays about contemporary art and architecture. This was a collaborative project with the HOZT crew where I got the chance to design some pages of the website, such as: article page, archive page, contact page and all of the responsives sizes.',
'Xerode is a computer software that converts the formats of different media files, such as videos and audios. I was asked to make a more attractive user interface design and to improve the user experience design. I designed two different color options for the client.',
'Yummy Club is a web and phone application that joins every restaurant from the city in one single place. When I were part of this crew, I designed a form that allows users to add into the app their favorite restaurants, letting them select the food speciality, the restaurant enviroment, the address, social media and photos.',
"Chelsea Young Writers Club is a London based institute that stimulates creative thinking and writing skills in kids through many after-school workshops. We've worked together in several projects, many of them have been printing and digital pieces to advertise their workshops, all of them with different topics and approachs.",
'This flyer was a branding collateral to advertise the services offered by Citas Medicas, which is a website with a medical directory, where users can find easier medical services.',
'Green Zone is a phone app that helps users to improve their exercises rutine, by having an online personal trainer through the app. I was asked to make this branding collateral with pictures that could engage with the brand and keeping the same branding color scheme.',
'Business card design for a spanish teacher and public speaker. For this proposal I wanted to reflect, very slightly, the characteristics of the services my client was offering, but also adding some elements that could bring up attention, such as the graphic elements and the contrasts in the color scheme.',
'These designs were made as an invitation to two different exhibitions in the art faculty from my city, where the fine arts students showed their artworks. Both designs were published in social media.',
'Branding collaterals for Infinity Trader, a Costa Rica based company. I developed different kinds of designs, such as stationary design of legal documents and identity pieces, and also some digital design, like a pitch presentation. All of the pieces were based in the palette color that was already defined in their logo.',
'SeedTrust is a company that provides dependable escrow services to intended parents, surrogates, and egg donors during collaborative reproductive arrangements. This marketing collateral intended advertise some of their benefits and services, and also showing some of their partners crew.',
'This flyer was a intended to advertise the grand opening of Gym Rox Fitness, a gym located in Jamaica, which was advertising a new sale promotion because of the opening. I was asked to design this flyer with images that could engage with their target and the services they offer.'];

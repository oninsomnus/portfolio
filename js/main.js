var askMe = document.querySelector("#txtPregunta");
var pen = document.querySelector(".circle");
var projects = document.querySelector("#projectsPlace");
var subMenu = document.querySelector(".rotate ul");
var about = document.querySelector("#about");
var btnAway = document.querySelector("#btnAway");
var indice = document.querySelector(".indice")
var circle = document.querySelector(".circle")

askMe.style.opacity="0";
askMe.style.transform="translateX(100%)";


pen.addEventListener("mouseover", display, false);
pen.addEventListener("mouseout", displayFalse);
projects.addEventListener('click', proyectos);

var id;

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
	
		console.log(ola2);


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
	indice.style.transition = '3s';
	indice.style.transform = 'translate(0%)';
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
}
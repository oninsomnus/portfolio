var wwid = window.innerWidth;

if(wwid <= 964 && wwid >= 678){

new Vivus('backid', { 
  duration: 100,
  file: './img/newbackXS.svg',
  start: 'autostart', 
  animTimingFunction: Vivus.EASE
});

}

if(wwid > 964){

new Vivus('backid', { 
  duration: 100,
  file: './img/newbackXS.svg',
  start: 'autostart', 
  animTimingFunction: Vivus.EASE
});

}

if(wwid >= 300 && wwid <= 677){

	new Vivus('backid', { 
	  duration: 100,
	  file: './img/newbackXXS.svg',
	  start: 'autostart', 
	  animTimingFunction: Vivus.EASE
	});

}

/*
	var lasrayas = document.querySelector('#rayitas');


	var boxwid = wwid + 200;

	if(wwid < 964){
		console.log(lasrayas);
		lasrayas.setAttribute("viewBox","0 0 " + boxwid + " 868");

	}

	*/
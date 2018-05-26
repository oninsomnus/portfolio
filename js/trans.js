document.addEventListener('readystatechange', event => {

	if (event.target.readyState === "complete"){

		Barba.Pjax.start();
	  	Barba.Prefetch.init();

	}
});
var cuerpobarba = document.querySelector('.aboutcontainer');

function transicion(){
	new Vivus('transpur', {file: './img/transpur.svg', duration: 500, start: 'autostart', pathTimingFunction: Vivus.EASE, type: 'scenario'});
}

		

document.addEventListener("DOMContentLoaded", function() {
 	
 	Barba.Pjax.start();
  	Barba.Prefetch.init();
    
    var FadeTransition = Barba.BaseTransition.extend({
      start: function() {
        Promise
          .all([this.newContainerLoading, this.fadeOut()])
          .then(this.fadeIn.bind(this));
      },
 
      fadeOut: function() {

      },
 
      fadeIn: function() {
      	transicion();
      	this.newContainer.classList.remove('aboutcontainer');
        this.newContainer.classList.toggle('fade-in');
        this.done();
      }
    });

    Barba.Pjax.getTransition = function() {
      return FadeTransition;
    };
	
});

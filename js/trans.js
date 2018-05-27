var cuerpobarba = document.querySelector('.aboutcontainer');
var transpur = document.querySelector('#transpur');

function transicion(){
	new Vivus('transpur', {file: './img/transpur.svg', duration: 500, start: 'autostart', pathTimingFunction: Vivus.EASE, type: 'scenario'}, hidetrans);
}

function hidetrans(){
	transpur.style.opacity = "0"
	transpur.style.display = "none"
}

		

document.addEventListener("DOMContentLoaded", function() {
	
	var Aboutme = Barba.BaseView.extend({
		namespace: 'aboutme',
		onEnter: function() {},
		onEnterCompleted: function() {
			document.body.classList.add('bodyabout');
		},
		onLeave: function() {
			document.body.classList.remove('bodyabout');
		},
		onLeaveCompleted: function() {}
	});

	Aboutme.init();

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

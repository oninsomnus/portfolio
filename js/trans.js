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
        this.oldContainer.classList.toggle('fade-out');
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
               resolve();
           }, 500);
        });
      },

      fadeIn: function() {
        this.newContainer.classList.toggle('fade-in');
        this.done();
      }
    });

    Barba.Pjax.getTransition = function() {
      return FadeTransition;
    };

    console.log('App started');
});
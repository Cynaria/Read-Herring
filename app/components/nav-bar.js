import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function () {
    var isMobile = window.innerWidth < 768;
    if (isMobile) {
      var navMenu = this.$('#js-navigation-menu');
      var menuToggle = this.$('#js-mobile-menu').unbind();
      navMenu.removeClass("show");

      menuToggle.on('click', function(e) {
        e.preventDefault();
        navMenu.slideToggle(function(){
          if(navMenu.is(':hidden')) {
            navMenu.removeAttr('style');
          }
        });
      });  
    }
  }
});

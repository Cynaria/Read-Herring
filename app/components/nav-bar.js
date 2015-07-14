import Ember from 'ember';

export default Ember.Component.extend({
  idName: ['js-navigation-menu'],
  className: ['hide'],
  didInsertElement: function () {
    var navMenu = this.$('#js-navigation-menu');
    var menuToggle = this.$('#js-mobile-menu').unbind();
    navMenu.removeClass("show");
    this.$('.logo').removeClass("show");

    menuToggle.on('click', function(e) {
      e.preventDefault();
      navMenu.slideToggle(function(){
        if(navMenu.is(':hidden')) {
          navMenu.removeAttr('style');
        }
      });
    });  
  }
});

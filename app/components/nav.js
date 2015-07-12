import Ember from 'ember';

export default Ember.Component.extend({
	didInsertElement: function(){
		var menuToggle = this.$('#js-mobile-menu').unbind();
    this.$('#js-navigation-menu').removeClass("show");

    menuToggle.on('click', function(e) {
      e.preventDefault();
      this.$('#js-navigation-menu').slideToggle(function(){
        if(this.$('#js-navigation-menu').is(':hidden')) {
          this.$('#js-navigation-menu').removeAttr('style');
        }
      });
    });
  }
});
  
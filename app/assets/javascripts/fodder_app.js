window.fodderApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
  var cu = JSON.parse($("#bootstrapped_current_user").html()).current_user;
  if (cu === null) {
    fodderApp.currentUser = new fodderApp.Models.User;
  } else {
    fodderApp.currentUser = new fodderApp.Models.User(cu, {parse:true});
  }
  
  var $nb_el = $("#navbar");
  fodderApp.navBar = new fodderApp.Views.SessionsListen({el: $nb_el});
  fodderApp.navBar.render();
  $("#changing-nav").html(fodderApp.navBar.$el);
  
  fodderApp.recipes = new fodderApp.Collections.Recipes();
  fodderApp.recipes.fetch({
    success: function () {
      var appRouter = new fodderApp.AppRouter();
      appRouter.setUpSidebar();
      Backbone.history.start();
    }
  });    
  }
};

$(document).ready(function(){
  fodderApp.initialize();
});

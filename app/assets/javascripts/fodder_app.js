window.fodderApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
	var cu = JSON.parse($("#bootstrapped_current_user").html()).current_user;
  if (cu===null) {
    fodderApp.currentUser = null;
  }  else {
	  fodderApp.currentUser = new fodderApp.Models.User(cu, {parse:true});
  }
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

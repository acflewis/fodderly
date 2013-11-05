window.fodderApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
	
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

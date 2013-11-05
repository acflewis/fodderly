fodderApp.AppRouter = Backbone.Router.extend({
	routes: {
		"" : "showRecipesIndex",
		"recipes/:id" : "showRecipePage"
	},
	
    setUpSidebar: function () {
        // var indexView = new JournalApp.Views.PostsIndex({
      //       collection: JournalApp.posts
      //   });
      //   indexView.render();
        $('.sidebar').html("Some info about user");
    },
    
	showRecipesIndex: function () {
		var indexView = new fodderApp.Views.RecipesIndex({
			collection: fodderApp.recipes
		});
		indexView.render();
		$('.content').html(indexView.$el);
	},
	
	showRecipePage: function (id) {
		var recipe = fodderApp.recipes.get(id)
		var pageView = new fodderApp.Views.RecipeShow({
			model: recipe
		});
		pageView.render();
		$('.content').html(pageView.$el);
	}// ,
//     
//     showEditForm: function (id) {
//         var postedForm = new JournalApp.Views.NewPostForm({
//             model: JournalApp.posts.get(id)
//         });
//         $(".content").html(postedForm.render().$el)
//     },
//     
//     showNewForm: function () {
//         var postedForm = new JournalApp.Views.NewPostForm();
//         $(".content").html(postedForm.render().$el)
//     }
})
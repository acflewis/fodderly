fodderApp.Views.RecipeShow = Backbone.View.extend({
	template_no_user: JST["recipes/show"],
  template_user: JST["recipes/show_user"],
	
	initialize: function (options) {
		this.listenTo(this.model, "all", this.render);
	},
  
  events: {
   "click #add_recipe_form": "collectionSelect"
  },
 
 
 collectionSelect: function (event) {
   event.preventDefault();
   var that  = this;
 
   var formContents = $(event.currentTarget).serializeJSON();
   
   var successCallback = function (model) {
       this.$("#added_info").html("<p>Successfully added<p>")
   };
   
   var errorCallback = function (model,xhr) {
     // don't want to do anything
     this.$("#added_info").html("<p>Already in collection<p>")
   };

   var CollectionRecipe = new fodderApp.Models.CollectionRecipes();
   
   CollectionRecipe.set(formContents);
 
   CollectionRecipe.save({}, {
       success: successCallback,
       error: errorCallback
   });
   
 },

	
	render: function () {
        
        recipe = this.model;       
        if (typeof fodderApp.currentUser.id != "undefined" ) {
      		var renderedContent = this.template_no_user({
      			recipe: recipe, 
            ingredients: recipe.get("ingredients")
      		});
      		this.$el.html(renderedContent);
      		return this;  
        } else {
       
          var renderedContent = this.template_user({
      			recipe: recipe, 
            ingredients: recipe.get("ingredients"),
            collections: fodderApp.currentUser.get("collections")
      		});
      		this.$el.html(renderedContent);
      		return this;        
        };      
	}	
})

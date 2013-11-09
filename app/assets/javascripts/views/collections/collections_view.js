fodderApp.Views.CollectionShow = Backbone.View.extend({
	template: JST["recipes/index"],
	
	initialize: function (options) {
		this.listenTo(this.model, "all", this.render);
    this.listenTo(this.model.collection_recipes(), "all", this.render);
    
	},
  
  events: {
   "click #recipe-delete-button": "collectionRecipeDestroy",
  },
  
	collectionRecipeDestroy: function (event) {
    event.preventDefault();
    var userCollection = this.model;
		var recipeId = $(event.currentTarget).attr("data-id");

    // userCollection = this.model;
    // var recipesJSON = userCollection.get("recipes") 
    // var recipes = new fodderApp.Collections.Recipes(recipesJSON);
    // recipes.get(recipeId)
    
    $.ajax ({
      url: "/users/" + userCollection.get("user_id") + "/collections/" + userCollection.get("id") + "/recipes/" + recipeId + "/collection_recipe",
      type: "DELETE",
      success: function () {
         userCollection.collection_recipes().remove(recipeId)
      }
    })  
	},
 
	
	render: function () {
    userCollection = this.model;
    var recipes = userCollection.collection_recipes();
        
		var renderedContent = this.template({
       version: "collection",
       title: userCollection.get("name"),
			 recipes: this.collection
		});
		
		this.$el.html(renderedContent);
		
		return this;
	}
	
	
})
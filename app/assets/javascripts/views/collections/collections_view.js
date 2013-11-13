fodderApp.Views.CollectionShow = Backbone.View.extend({
	template: JST["recipes/index"],
	
	initialize: function (options) {
		this.listenTo(this.model, "all", this.render);
    this.listenTo(this.model.collection_recipes(), "all", this.render);
    
	},
  
  events: {
   "click #recipe-delete-button": "collectionRecipeDestroy",
   "click #export-ingedient-list": "collectionExportList"
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
 
  collectionExportList: function (event) {
    event.preventDefault();
    $(".modal-body").empty();  
    var userCollectionRecipes = this.model._Recipes;
    userCollectionRecipes.forEach ( function (recipe) { 
      var name = $("<h3></h3>").text(recipe.escape("name"));
      console.log(name)
      $(".modal-body").append(name);
      $(".modal-body").append("<ul>");
      ingredients = fodderApp.recipes.at(recipe.escape("id")).get("ingredients");
      ingredients.forEach (function (ingredient) {
        var ingredient = $("<li></li>").text(ingredient.escape("food"));
        $(".modal-body").append(ingredient);
      })  
      $(".modal-body").append("</ul>");  
    } )

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
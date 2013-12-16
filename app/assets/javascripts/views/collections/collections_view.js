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
    $(".list-modal-body").empty();
    $recipeDiv = $("<div>");
    
    var userCollectionRecipes = this.model._Recipes;
    userCollectionRecipes.forEach ( function (recipe) { 
      var name = $("<h3>");
      name.html(recipe.escape("name"))
      $recipeDiv.append(name);
      var $ul = $("<ul>");
      ingredients = fodderApp.recipes.at(recipe.escape("id")).get("ingredients");
          
      ingredients.forEach (function (ingredient) {
        var ingredientList = $("<li>");
        ingredientList.html(ingredient.escape("food"));
        $ul.append(ingredientList);
      })  
      $recipeDiv.append($ul);
    } )
    $(".list-modal-body").html($recipeDiv);
    $('#myModal').modal('show');
    
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
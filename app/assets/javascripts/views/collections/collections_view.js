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
    var userCollectionRecipes = this.model._Recipes;
    var list = [];
    userCollectionRecipes.forEach ( function (recipe) { 
      list.push("<h3>" + recipe.get("name") + "</h3><ul>")
      ingredients = fodderApp.recipes.at(recipe.id).get("ingredients");
      ingredients.forEach (function (ingredient) {
        list.push("<li>" + ingredient.get("food") + "</li>")
      })  
      list.push("</ul>")   
    } )

    $(".modal-body").html(
      list
    )
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
    
    $(".drag").draggable({});

    $('.dotdotdot').dotdotdot({ 
        ellipsis: '... ', 
        wrap: 'word', 
        after: null, 
        watch: true, 
        height: 70 
    });
    
		
		return this;
	}
	
	
})
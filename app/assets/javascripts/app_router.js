fodderApp.AppRouter = Backbone.Router.extend({
  routes: {
    "" : "showRecipesIndex",
    "recipes/:id" : "showRecipePage",
    "users/:id/collections/:id" : "showCollection",
    "selection/:option" : "showRecipesIndex",
    "collections" : "showCollectionsIndex",
    "collections/:id" : "showOtherCollection"
  },
  
  initialize: function () {
    this.content = $('#content')
  },
	
  setUpSidebar: function () {
    var userView = new fodderApp.Views.UserShow({
      model: fodderApp.currentUser
    });
    userView.render();
    $('#sidebar').html(userView.$el);
  },
  
  showCollectionsIndex: function (option) {
    var that = this;
    fodderApp.collections = new fodderApp.Collections.AllCollections();
 
    fodderApp.collections.fetch({
		  success: function () {
        var indexView = new fodderApp.Views.CollectionsIndex({
          collection: fodderApp.collections,
		    })
        that._swapView(indexView); 
	    }
    });	    
  },
    
  showRecipesIndex: function (option) {
    var version = "browse";
    var speedy = 1800;
    var healthy = 400;
    var info_recipes = new fodderApp.Collections.Recipes(fodderApp.recipes.filter(function(recipe) { 
      return recipe.get("total_time_s") != null &&
             recipe.get("energy_value") != null } ));
    if (option=="fast-healthy") {
      var recipes = new fodderApp.Collections.Recipes(info_recipes.filter(function(recipe) { 
        return recipe.get("total_time_s") < speedy &&
               recipe.get("energy_value") < healthy} ));
      var title = "Speedy and Healthy recipes"
    } else if (option=="fast-decadent") {
      var recipes = new fodderApp.Collections.Recipes(info_recipes.filter(function(recipe) { 
        return recipe.get("total_time_s") < speedy &&
               recipe.get("energy_value") > healthy} ));
      var title = "Speedy and Decadent recipes"
    } else if (option=="slow-healthy") {
      var recipes = new fodderApp.Collections.Recipes(info_recipes.filter(function(recipe) { 
        return recipe.get("total_time_s") > speedy &&
               recipe.get("energy_value") < healthy } ));
      var title = "Ponderous and Healthy recipes"
    } else if (option=="slow-decadent") {
      var recipes = new fodderApp.Collections.Recipes(info_recipes.filter(function(recipe) { 
        return recipe.get("total_time_s") > speedy &&
               recipe.get("energy_value") > healthy  } ));
       var title = "Ponderous and Decadent recipes"
    } else if (option=="all") {
      var recipes = fodderApp.recipes;
      var title = "All recipes";
    } else if (option==undefined) {
      var recipes = fodderApp.recipes;
      var title = "All recipes";
    }
    
    var indexView = new fodderApp.Views.RecipesIndex({
      collection: recipes,
      title: title,
      version: version
    });
    
    this._swapView(indexView); 
  },
  
  showRecipePage: function (id) {
    var recipe = fodderApp.recipes.get(id)
    var pageView = new fodderApp.Views.RecipeShow({
      model: recipe
    });
    pageView.render();
    this._swapView(pageView);
  },
    
  showCollection: function (user_id, collection_id) {
    var that = this;
    var userCollection = new fodderApp.Models.Collection({id: collection_id});
    userCollection.fetch({
      success: callback,
      error: function() {
        console.log("fail")
      }
    }); 
        
    function callback (uCol, error, options) {
      var collectionView = new fodderApp.Views.CollectionShow({
        model: userCollection,
        collection: userCollection.collection_recipes()
      });
      collectionView.render("collection", userCollection.get("name"));
      that._swapView(collectionView);
    };   
  },

  showOtherCollection: function (collection_id) {
    var that = this;  
    var otherCollection = new fodderApp.Models.Collection({id: collection_id});
    otherCollection.fetch({
      success: callback,
      error: function() {
        console.log("fail")
      }
    }); 
        
    function callback (uCol, error, options) {     
      var collectionView = new fodderApp.Views.CollectionOtherShow({
        model: otherCollection,
        collection: otherCollection.collection_recipes()
      });
      collectionView.render("collection", otherCollection.get("name"));
      that._swapView(collectionView);
    };   
  },
 
  _swapView: function (newView) {
    if (this._prevView) {
      this._prevView.remove();
    }

    this._prevView = newView;
    newView.render();
    this.content.html(newView.$el);
  }
})
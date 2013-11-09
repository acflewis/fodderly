fodderApp.AppRouter = Backbone.Router.extend({
  routes: {
    "" : "showRecipesIndex",
    "recipes/:id" : "showRecipePage",
    "users/:id/collections/:id" : "showCollection",
    "selection/:option" : "showRecipesIndex"
  },
	
  setUpSidebar: function () {
    var userView = new fodderApp.Views.UserShow({
      model: fodderApp.currentUser
    });
    userView.render();
    $('#sidebar').html(userView.$el);
  },
    
  showRecipesIndex: function (option) {
    var version = "browse";
    
    if (option=="fast") {
      var recipes = new fodderApp.Collections.Recipes(fodderApp.recipes.filter(function(recipe) { return recipe.get("total_time_s") < 1800 } ));
      var title = "Fast"
    } else if (option=="slow") {
      var recipes = new fodderApp.Collections.Recipes(fodderApp.recipes.filter(function(recipe) { return recipe.get("total_time_s") > 1800 } ));
      var title = "Slow"
    } else if (option==undefined) {
      var recipes = fodderApp.recipes;
      var title = "All";
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
        alert("fail")
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
 
  _swapView: function (newView) {
    if (this._prevView) {
      // this._prevView.stopListening();
      this._prevView.remove();
    }

    this._prevView = newView;
    newView.render();
    $("#content").html(newView.$el);
  }    
})

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
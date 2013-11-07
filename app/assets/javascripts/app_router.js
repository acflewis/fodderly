fodderApp.AppRouter = Backbone.Router.extend({
  routes: {
    "" : "showRecipesIndex",
    "recipes/:id" : "showRecipePage",
    "users/:id/collections/:id" : "showCollection"
  },
	
  setUpSidebar: function () {
    var userView = new fodderApp.Views.UserShow({
      model: fodderApp.user
    });
    userView.render();
    $('#sidebar').html(userView.$el);
  },
    
  showRecipesIndex: function () {
    var indexView = new fodderApp.Views.RecipesIndex({
      collection: fodderApp.recipes
    });
    indexView.render();
    $('#content').html(indexView.$el);
  },
	
  showRecipePage: function (id) {
    var recipe = fodderApp.recipes.get(id)
    var pageView = new fodderApp.Views.RecipeShow({
      model: recipe
    });
    pageView.render();
    $('#content').html(pageView.$el);
  },
    
  showCollection: function (user_id, collection_id) {
    var userCollection = new fodderApp.Models.Collection({id: collection_id});
    // debugger;
    userCollection.fetch({
      success: callback,
      error: function() {
        alert("fail")
      }
    }); 
        
    function callback (uCol, error, options) {
      var collectionView = new fodderApp.Views.CollectionShow({
        model: userCollection
      });
      collectionView.render();
      $('#content').html(collectionView.$el);
    };   
  }
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
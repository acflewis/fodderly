fodderApp.Models.CollectionRecipes = Backbone.Model.extend({
    // urlRoot: "/collections",
    
    urlRoot: function () {
      return "/users/" + this.get("user_id") + "/collections/" + this.get("collection_id") + "/collection_recipes";
    }
	
});
fodderApp.Collections.CollectionRecipesAll = Backbone.Collection.extend({
   
   model: fodderApp.Models.CollectionRecipes, 
   
   url: function () {
     return "/users/" + this.get("user_id") + "/collections/" + this.get("collection_id") + "/collection_recipes";
  
   }
});
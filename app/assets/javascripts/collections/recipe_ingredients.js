fodderApp.Collections.RecipeIngredients = Backbone.Collection.extend({
   
   model: fodderApp.Models.Ingredient, 
   
   url: function () {
       return "/recipes/" + this.recipe.id + "/ingredients";
   }
});
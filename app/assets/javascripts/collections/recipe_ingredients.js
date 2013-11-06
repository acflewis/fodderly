fodderApp.Collections.RecipeIngredients = Backbone.Collection.extend({
   
   model: fodderApp.Models.Ingredient, 
   
   url: function () {
       debugger;
       return "/recipes/" + this.recipe.id + "/ingredients";
   }
});
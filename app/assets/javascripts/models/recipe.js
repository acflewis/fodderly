fodderApp.Models.Recipe = Backbone.Model.extend({
	urlRoot: "/recipes",
    
    parse: function (serverAttributes, options) {
        var ingredients = new fodderApp.Collections.RecipeIngredients(serverAttributes.ingredients);
      
        serverAttributes.ingredients = ingredients;
        return serverAttributes;
    }
	
});
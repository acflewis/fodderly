fodderApp.Models.CollectionRecipes = Backbone.Model.extend({
    // urlRoot: "/collections",
    
    urlRoot: function () {
        return "/recipes/" + this.get("recipe_id") + "/collection_recipes";
    }
	
});
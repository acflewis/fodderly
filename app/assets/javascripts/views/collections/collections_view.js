fodderApp.Views.CollectionShow = Backbone.View.extend({
	template: JST["recipes/index"],
	
	initialize: function (options) {
		this.listenTo(this.model, "all", this.render);
	},
	
	render: function () {
        userCollection = this.model;
        var recipesJSON = userCollection.get("recipes") 
        var recipes = new fodderApp.Collections.Recipes(recipesJSON);
        
		var renderedContent = this.template({
            title: userCollection.get("name"),
			recipes: recipes
		});
		
		this.$el.html(renderedContent);
		
		return this;
	}
	
	
})
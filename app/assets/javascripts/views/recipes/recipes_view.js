fodderApp.Views.RecipeShow = Backbone.View.extend({
	template: JST["recipes/show"],
	
	initialize: function (options) {
		this.listenTo(this.model, "all", this.render);
	},
	
	render: function () {
        
        recipe = this.model;
        
		var renderedContent = this.template({
			recipe: recipe, 
            ingredients: recipe.get("ingredients")
		});
		
		this.$el.html(renderedContent);
		
		return this;
	}
	
	
})

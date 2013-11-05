fodderApp.Views.RecipeShow = Backbone.View.extend({
	template: JST["recipes/show"],
	
	initialize: function (options) {
		this.listenTo(this.model, "all", this.render);
	},
	
	render: function () {
		var renderedContent = this.template({
			recipe: this.model
		});
		
		this.$el.html(renderedContent);
		
		return this;
	}
	
	
})
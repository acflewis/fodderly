fodderApp.Views.RecipesIndex = Backbone.View.extend({
	template: JST['recipes/index'],
	
	// events: {
//         "click .delete-button": "postDestroy"
//     },
//     
//     initialize: function (options) {
//         this.listenTo(this.collection, "add remove reset change:title", this.render);
//     },
	

	
	render: function () {
		var renderedContent = this.template({
			title: "All recipes",
			recipes: this.collection
		});
		this.$el.html(renderedContent);
		return this;
	}
	
})
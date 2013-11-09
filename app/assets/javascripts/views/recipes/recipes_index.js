fodderApp.Views.RecipesIndex = Backbone.View.extend({
	
  template: JST['recipes/index'],
  
  
  initialize: function (options) {
    this.title = options.title;
    this.version = options.version; 
  },
	
	render: function () {
		var renderedContent = this.template({
			version: this.version,
      title: this.title,
			recipes: this.collection
		});
		this.$el.html(renderedContent);
		return this;
	}
  
})
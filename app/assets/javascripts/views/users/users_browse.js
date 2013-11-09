fodderApp.Views.UsersBrowse = Backbone.View.extend({
	
  template: JST['recipes/browse_bar'],
  
	initialize: function (options) {
		
	},
  
	render: function () {
		var renderedContent = this.template({
			model: fodderApp.currentUser
		});
		this.$el.html(renderedContent);
		return this;
	}
  
})


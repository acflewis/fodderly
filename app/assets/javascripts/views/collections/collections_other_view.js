fodderApp.Views.CollectionOtherShow = Backbone.View.extend({
	template: JST["recipes/index"],
	
	initialize: function (options) {
		this.listenTo(this.model, "all", this.render);
    this.listenTo(this.model.collection_recipes(), "all", this.render);
    
	},
	
	render: function () {
    otherCollection = this.model;
    var recipes = otherCollection.collection_recipes();
     
		var renderedContent = this.template({
       version: "browse",
       title: otherCollection.get("name"),
			 recipes: recipes
		});
		
		this.$el.html(renderedContent);
		
		return this;
	}
	
	
})
fodderApp.Views.UserShow = Backbone.View.extend({
	template: JST["users/show"],
	
  initialize: function (options) {  
    if (fodderApp.currentUser != null) {
      this.listenTo(fodderApp.currentUser, "all", this.render);
      this.listenTo(fodderApp.currentUser.get("collections"), "all", this.render);
    }
  },
  
  events: {
   "click #delete-button": "collectionDestroy"
  },
  
	collectionDestroy: function (event) {
    event.preventDefault();
		var collectionId = $(event.target).attr("data-id");

    var userCollection = fodderApp.currentUser.get("collections").get(collectionId);
    userCollection.fetch({
      success: function() {
        userCollection.destroy();
      },
      error: function() {
        alert("fail")
      }
    });    
	},
	
	render: function () {      
        if (fodderApp.currentUser === null) {
          var renderedContent = this.template({
              user: null,
              collections: null
          });
          this.$el.html(renderedContent);
          } else {
            var renderedContent = this.template({
                user: fodderApp.currentUser ,
                collections: fodderApp.currentUser.get("collections")
            });
            this.$el.html(renderedContent);
        }
        return this;
	}
	
});
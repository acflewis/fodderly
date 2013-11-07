fodderApp.Views.UserShow = Backbone.View.extend({
	template: JST["users/show"],
	
    // initialize: function (options) {
 //        this.listenTo(this.model, "all", this.render);
 //    },
 //    
 //   
	
	render: function () {
       
        var cu = JSON.parse($("#bootstrapped_current_user").html()).current_user;
       
        if (cu === null) {
            this.$el.html("Please Sign In or Sign Up to create and view recipe collections");
        } else {
          var cu_collections = JSON.parse($("#bootstrapped_current_user_collections").html()).current_user_collections;
        
            var currentUser     = new fodderApp.Models.User(cu);
           var currentUserCollections     = new fodderApp.Collections.UserCollections(cu_collections);
            var renderedContent = this.template({
                user: currentUser,
                collections: currentUserCollections
            });

            this.$el.html(renderedContent);
        }

        return this;

	}
	
	
});
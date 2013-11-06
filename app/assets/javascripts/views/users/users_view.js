fodderApp.Views.UserShow = Backbone.View.extend({
	template: JST["users/show"],
	
    // initialize: function (options) {
    //     this.listenTo(this.model, "all", this.render);
    // },
	
	render: function () {
       
        var cu = JSON.parse($("#bootstrapped_current_user").html()).current_user;
        
        if (cu === null) {
            this.$el.html("Please login or signup to create and view recipe collections");
        } else {
            var currentUser     = new fodderApp.Models.User(cu);
            var renderedContent = this.template({
                user: currentUser
            });

            this.$el.html(renderedContent);
        }

        return this;

	}
	
	
})
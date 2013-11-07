fodderApp.Models.Collection = Backbone.Model.extend({
    // urlRoot: "/collections",
    
    urlRoot: function () {
        return "/users/" + this.user_id + "/collections";
    }
	
});
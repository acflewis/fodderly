fodderApp.Models.Collection = Backbone.Model.extend({
    // urlRoot: "/collections",
    
    urlRoot: function () {
        return "/users/" + this.get("user_id") + "/collections";
    }
	
});
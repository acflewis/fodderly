fodderApp.Models.User = Backbone.Model.extend({
	urlRoot: "/users", 
      
  parse: function (serverAttributes, options) {
      var collections = new fodderApp.Collections.UserCollections(serverAttributes.collections);
      
      serverAttributes.collections = collections;
      
      return serverAttributes;
  }    
	
});
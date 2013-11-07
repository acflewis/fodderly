fodderApp.Collections.UserCollections = Backbone.Collection.extend({
   
   model: fodderApp.Models.Collection, 
   
   url: function () {
       
       return "/users/" + this.user.id + "/collections";
   }
});
fodderApp.Collections.AllCollections = Backbone.Collection.extend({
   
   model: fodderApp.Models.Collection, 
   
   url: function () {
       
       return "/collections";
   }
});
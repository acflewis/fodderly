fodderApp.Models.Collection = Backbone.Model.extend({
    // urlRoot: "/collections",
    
    urlRoot: function () {
        return "/users/" + this.get("user_id") + "/collections";
    },
    
    collection_recipes: function () {
      if (!this._Recipes) {
        this._Recipes = new fodderApp.Collections.Recipes([], { collection: this });
      }
 
      return this._Recipes;
    },
    
    parse: function (serverAttributes, options) {
      this.collection_recipes().reset(serverAttributes.recipes);
      delete serverAttributes.recipes;
 
      return serverAttributes;
    },
 
    toJSON: function () {
      var json = _.extend({}, this.attributes);
      json.recipes = this.collection_recipes().toJSON();
    
      return json;
    }
	
});
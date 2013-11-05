fodderApp.Collections.Recipes = Backbone.Collection.extend({
  model: fodderApp.Models.Recipe,

  url: "/recipes"
});
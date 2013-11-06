fodderApp.Collections.Users = Backbone.Collection.extend({
  model: fodderApp.Models.User,

  url: "/users"
});
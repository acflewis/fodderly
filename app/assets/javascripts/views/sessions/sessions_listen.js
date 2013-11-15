fodderApp.Views.SessionsListen = Backbone.View.extend({
	
  initialize: function (options) {  
    this.model = new fodderApp.Models.Session; 
    this.listenTo(fodderApp.currentUser, "change", this.render);  
    this.listenTo(this.model, "sync", this.render);  
  },
  
  template: JST['sessions/nav'],
  
	render: function () {
		var renderedContent = this.template({
      model: fodderApp.currentUser
		});
		$("#change-nav").html(renderedContent);
		return this;
	},
 
  events: {
   "click #session-create-button": "sessionCreate",
   "click #session-destroy-button": "sessionDestroy"
  },  
  
  sessionCreate: function (event) {
    event.preventDefault();
    this.model.clear()
    $("#wrong-credentials").empty()
    var form =  $(event.target).parent().serializeJSON();
    var User = form.user;
     this.model.save({user: User} ,{
        success: function(model, response, options) {
          var collections = response.collections;
          delete response.collections;
          var f = new fodderApp.Collections.UserCollections(collections);
          
          fodderApp.currentUser.set({collections: f}, { silent: true });
        	fodderApp.currentUser.set(response)         
        },
        error: function() {
          $("#wrong-credentials").append("Credentials are wrong")
        }
      });    
  },
  
  sessionDestroy: function (event) {
    event.preventDefault();
    var that = this;
    $.ajax ({
      url: "/session",
      type: "DELETE",
      success: function (model, response, options) {
   
        fodderApp.currentUser.clear()    
      
        Backbone.history.navigate('selection/all', {trigger: true});
        that.model.destroy()
      }
    });
  }

})
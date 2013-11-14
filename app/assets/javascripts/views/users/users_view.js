fodderApp.Views.UserShow = Backbone.View.extend({
	template: JST["users/show"],
	
  initialize: function (options) {  
   
      this.listenTo(fodderApp.currentUser, "all", this.render);
     if (typeof fodderApp.currentUser.id != "undefined" ) {
       console.log("listening to connections")
      this.listenTo(fodderApp.currentUser.get("collections"), "all", this.render);
    }
  },
  
  events: {
   "click #delete-button": "collectionDestroy",
   "click #rename-submit-button": "collectionUpdate",
   "click #create-collection-button": "collectionCreate"
  },
  
	collectionDestroy: function (event) {
    event.preventDefault();
		var collectionId = $(event.currentTarget).attr("data-id");

    var userCollection = fodderApp.currentUser.get("collections").get(collectionId);
    userCollection.fetch({
      success: function() {
        userCollection.destroy();
        if (Backbone.history.fragment.split("/")[3] == userCollection.get("id")) {
          Backbone.history.navigate("/#", {trigger: true});
        }
      },
      error: function() {
        console.log("fail")
      }
    });    
	},
  
  collectionUpdate: function (event) {
    event.preventDefault();
    var form =  $(event.target).parent().serializeJSON();
    var newName = form.collection.name;
    var collectionId = form.collection.id;
      var userCollection = fodderApp.currentUser.get("collections").get(collectionId);
      userCollection.save({name: newName} ,{
        success: function() {
          console.log("success")
        },
        error: function() {
          console.log("fail")
        }
      });    
  },
  
  collectionCreate: function (event) {
    event.preventDefault();
    var form =  $(event.target).parent().serializeJSON();
    var Name = form.collection.name;
      var userCollection = new fodderApp.Models.Collection;
      userCollection.save({name: Name} ,{
        success: function() {
          debugger;
          fodderApp.currentUser.get("collections").add(userCollection)
        },
        error: function() {
          console.log("fail")
        }
      });    
  },
	
	render: function () {   
    var otherCollections = new fodderApp.Collections.AllCollections;
    otherCollections.fetch();   
        if (typeof fodderApp.currentUser.id === "undefined" ) {
          var renderedContent = this.template({
              user: null,
              collections: null,
              other_collection: otherCollections
          });
          this.$el.html(renderedContent);
          } else {
            var renderedContent = this.template({
                user: fodderApp.currentUser ,
                collections: fodderApp.currentUser.get("collections"),
                other_collections: otherCollections
            });
            this.$el.html(renderedContent);
        }
        
      this.attachDraggables() ;
      return this;
	},
	
  attachDraggables: function() {
    this.$el.find( ".collection" ).droppable({
      accept: ".drag",
      over: function(event, ui) {
            $(this).addClass('hoverClass');
          },
      out: function(event, ui) {
            $(this).removeClass('hoverClass');
          },
      tolerance: "pointer",
      drop: function(event, ui) {
        var recipeId = ui.draggable.data().id;
        var collectionId = $(event.target).data().id;
  
        $.ajax ({
          url: "/users/" + fodderApp.currentUser.id + "/collections/" + collectionId + "/recipes/" + recipeId + "/collection_recipe",
          type: "POST",
          success: function () {}
        });
        $(this).removeClass('hoverClass');
      }
    });
  }
  
});
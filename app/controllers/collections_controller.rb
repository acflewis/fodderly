class CollectionsController < ApplicationController
  
  def new
    puts "Hello from new collection, current user is #{current_user}"
    @collection = Collection.new
  end
  
  def create
    @collection = Collection.new
    @collection.name = params[:collection][:name]
    @collection.user_id = params[:user_id]
     # @collection.user_id = current_user.id
    if @collection.save!
      redirect_to root_url
    else
      render :json => @collection.errors.full_messages
    end
  end
  
  def edit
    
  end
  
  def update
      @collection = Collection.find(params[:id])
      
      if @collection.update_attributes(params[:collection])
          render :json => @collection.to_json
      else 
          render :json => [{ :error => "An error was encountered while processing your rename request. Please try again." }], :status => 304
      end      
  end
  
  def destroy
    collection = Collection.find(params[:id])
    collection.destroy
    head :ok
  end
  
  def show
    collection = Collection.find(params[:id])
    render :json => collection, :include => [:recipes]
  end
  
  def index
    # render :json => current_user.collections
    render :json => Collection.all
  end
  
end

class CollectionsController < ApplicationController
  
  def new
    puts "Hello from new collection, current user is #{current_user}"
    @collection = Collection.new
  end
  
  def create
    @collection = Collection.new
    @collection.name = params[:collection][:name]
    @collection.user_id = params[:user_id]
    puts "Hello from create collection, current user is #{current_user}"
    puts form_authenticity_token
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
    
  end
  
  def destroy
    
  end
  
  def show
    collection = Collection.find(params[:id])
    render :json => collection, :include => [:recipes]
  end
  
  def index
    render :json => current_user.collections
  end
  
end

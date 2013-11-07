class CollectionsController < ApplicationController
  
  def new
    
  end
  
  def create
    
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

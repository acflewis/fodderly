class RecipesController < ApplicationController
  def index   
    render :json => Recipe.includes(:ingredients).all, :include => [:ingredients]
  end

  def show
    recipe = Recipe.find(params[:id])
    render :json => recipe, :include => [:ingredients]
  end
  
  def new
    
  end
  
  def create
    
  end
  
  def edit
    
  end
  
  def update
    
  end
end

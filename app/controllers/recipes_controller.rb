class RecipesController < ApplicationController
  def index
    
    render :json => Recipe.includes(:ingredients).all, :include => [:ingredients]
  end

  def show
    recipe = Recipe.find(params[:id])
    render :json => recipe, :include => [:ingredients]
  end
end

class IngredientsController < ApplicationController
  
  def index
    recipe = Recipe.find(params[:recipe_id])
    render :json => recipe.ingredients
  end
end

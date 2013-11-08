class CollectionRecipesController < ApplicationController
  
  def create
    @collection_recipe = CollectionRecipe.new
    @collection_recipe.recipe_id = params[:recipe_id]
    @collection_recipe.collection_id = params[:collection_id]
  
    if @collection_recipe.save!
      # There has to be a better way to do this -- just want to stay on page!
      render :json => @collection_recipe
    else
      render :json => @collection_recipe.errors.full_messages
    end  
  end
  
  def destroy
    collection_recipe = CollectionRecipes.find(params[:id])
    collection_recipe.destroy
    head :ok
  end
  
  
end

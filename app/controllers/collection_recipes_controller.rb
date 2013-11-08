class CollectionRecipesController < ApplicationController
  
  def create
    @collection_recipe = CollectionRecipe.new
    @collection_recipe.recipe_id = params[:recipe_id]
    @collection_recipe.collection_id = params[:collection_id]
  
    if @collection_recipe.save!
      render :json => @collection_recipe
    else
      render :json => @collection_recipe.errors.full_messages
    end  
  end
  
  def destroy
    collection_recipe = CollectionRecipe.find_by_collection_id_and_recipe_id(params[:collection_id], params[:recipe_id])
    collection_recipe.destroy
    head :ok
  end
  
  
end

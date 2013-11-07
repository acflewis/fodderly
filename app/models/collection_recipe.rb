class CollectionRecipe < ActiveRecord::Base
  attr_accessible :recipe_id, :collection_id
  
  belongs_to :recipe
  belongs_to :collection
  
end

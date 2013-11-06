class RemoveIngredientsAndImages < ActiveRecord::Migration
  def up
    remove_column :recipes, :ingredients
    remove_column :recipes, :images
    
    
  end

  def down
    add_column :recipes, :ingredients, :string
    add_column :recipes, :images, :string
    
  end
end

class AddBackImagesToRecipes < ActiveRecord::Migration
  def up
    add_column :recipes, :image_url, :string
  end

  def down
    remove_column :recipes, :image_url, :string
  end
end
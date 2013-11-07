class CreateCollectionRecipes < ActiveRecord::Migration
  def change
    create_table :collection_recipes do |t|
      t.integer :recipe_id
      t.integer :collection_id
      t.timestamps
    end
    add_index :collection_recipes, :recipe_id
    add_index :collection_recipes, :collection_id
  end
end

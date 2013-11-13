class AddValidatesForJoin < ActiveRecord::Migration
  def up
    add_index :collection_recipes, [:collection_id, :recipe_id], :unique => true
  end

  def down
    remove_index :collection_recipes, [:collection_id, :recipe_id], :unique => true
    
  end
end

class CreateIngredients < ActiveRecord::Migration
  def change
    create_table :ingredients do |t|
      t.integer :recipe_id, :null => false
      t.string :food, :null => false

      t.timestamps
    end
    add_index :ingredients, :recipe_id
  end
end
